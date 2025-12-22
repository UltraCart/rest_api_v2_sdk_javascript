"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CustomDashboard = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomDashboard"));
var _CustomDashboardResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomDashboardResponse"));
var _CustomDashboardSchedule = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomDashboardSchedule"));
var _CustomDashboardScheduleResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomDashboardScheduleResponse"));
var _CustomDashboardSchedulesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomDashboardSchedulesResponse"));
var _CustomDashboardsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomDashboardsResponse"));
var _CustomReport = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReport"));
var _CustomReportAccountConfig = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportAccountConfig"));
var _CustomReportAccountConfigResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportAccountConfigResponse"));
var _CustomReportAnalysisRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportAnalysisRequest"));
var _CustomReportAnalysisResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportAnalysisResponse"));
var _CustomReportChartPngUploadResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportChartPngUploadResponse"));
var _CustomReportExecutionRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportExecutionRequest"));
var _CustomReportExecutionResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportExecutionResponse"));
var _CustomReportResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportResponse"));
var _CustomReportsExecutionRequest = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportsExecutionRequest"));
var _CustomReportsExecutionResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportsExecutionResponse"));
var _CustomReportsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/CustomReportsResponse"));
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
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
/**
* Datawarehouse service.
* @module com.ultracart.admin.v2/DatawarehouseApi
* @version 4.1.35
*/
var DatawarehouseApi = exports["default"] = /*#__PURE__*/function () {
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
   * Callback function to receive the result of the analyzeCustomReport operation.
   * @callback module:com.ultracart.admin.v2/DatawarehouseApi~analyzeCustomReportCallback
   * @param {String} error Error message, if any.
   * @param {module:com.ultracart.admin.v2.models/CustomReportAnalysisResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Analyze a custom report
   * Analyze a custom report on the UltraCart account. 
   * @param {Number} custom_report_oid The report oid to analyze.
   * @param {module:com.ultracart.admin.v2.models/CustomReportAnalysisRequest} analyze_request Request to analyze custom report
   * @param {module:com.ultracart.admin.v2/DatawarehouseApi~analyzeCustomReportCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportAnalysisResponse}
   */
  return _createClass(DatawarehouseApi, [{
    key: "analyzeCustomReport",
    value: function analyzeCustomReport(custom_report_oid, analyze_request, callback) {
      var postBody = analyze_request;
      // verify the required parameter 'custom_report_oid' is set
      if (custom_report_oid === undefined || custom_report_oid === null) {
        throw new Error("Missing the required parameter 'custom_report_oid' when calling analyzeCustomReport");
      }
      // verify the required parameter 'analyze_request' is set
      if (analyze_request === undefined || analyze_request === null) {
        throw new Error("Missing the required parameter 'analyze_request' when calling analyzeCustomReport");
      }
      var pathParams = {
        'custom_report_oid': custom_report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomReportAnalysisResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports/{custom_report_oid}/analysis', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteCustomDashboard operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~deleteCustomDashboardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a custom dashboard
     * Delete a custom dashboard on the UltraCart account. 
     * @param {Number} custom_dashboard_oid The dashboard oid to delete.
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~deleteCustomDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteCustomDashboard",
    value: function deleteCustomDashboard(custom_dashboard_oid, callback) {
      var postBody = null;
      // verify the required parameter 'custom_dashboard_oid' is set
      if (custom_dashboard_oid === undefined || custom_dashboard_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_oid' when calling deleteCustomDashboard");
      }
      var pathParams = {
        'custom_dashboard_oid': custom_dashboard_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/datawarehouse/custom_dashboards/{custom_dashboard_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteCustomDashboardSchedule operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~deleteCustomDashboardScheduleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a custom dashboard schedule
     * delete a custom dashboard schedule on the UltraCart account. 
     * @param {Number} custom_dashboard_schedule_oid The dashboard schedule oid to delete.
     * @param {Number} custom_dashboard_oid The dashboard oid that owns the schedule.
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~deleteCustomDashboardScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteCustomDashboardSchedule",
    value: function deleteCustomDashboardSchedule(custom_dashboard_schedule_oid, custom_dashboard_oid, callback) {
      var postBody = null;
      // verify the required parameter 'custom_dashboard_schedule_oid' is set
      if (custom_dashboard_schedule_oid === undefined || custom_dashboard_schedule_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_schedule_oid' when calling deleteCustomDashboardSchedule");
      }
      // verify the required parameter 'custom_dashboard_oid' is set
      if (custom_dashboard_oid === undefined || custom_dashboard_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_oid' when calling deleteCustomDashboardSchedule");
      }
      var pathParams = {
        'custom_dashboard_schedule_oid': custom_dashboard_schedule_oid,
        'custom_dashboard_oid': custom_dashboard_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/datawarehouse/custom_dashboards/{custom_dashboard_oid}/schedules/{custom_dashboard_schedule_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteCustomReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~deleteCustomReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a custom report
     * Delete a custom report on the UltraCart account. 
     * @param {Number} custom_report_oid The report oid to delete.
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~deleteCustomReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteCustomReport",
    value: function deleteCustomReport(custom_report_oid, callback) {
      var postBody = null;
      // verify the required parameter 'custom_report_oid' is set
      if (custom_report_oid === undefined || custom_report_oid === null) {
        throw new Error("Missing the required parameter 'custom_report_oid' when calling deleteCustomReport");
      }
      var pathParams = {
        'custom_report_oid': custom_report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/datawarehouse/custom_reports/{custom_report_oid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
  }, {
    key: "deleteReport",
    value: function deleteReport(report_oid, callback) {
      var postBody = null;
      // verify the required parameter 'report_oid' is set
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
      var postBody = query_request;
      // verify the required parameter 'query_request' is set
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
     * Callback function to receive the result of the executeCustomReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~executeCustomReportCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportExecutionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute a custom report
     * Execute a custom report on the UltraCart account. 
     * @param {Number} custom_report_oid The report oid to execute.
     * @param {module:com.ultracart.admin.v2.models/CustomReportExecutionRequest} execution_request Request to execute custom report
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~executeCustomReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportExecutionResponse}
     */
  }, {
    key: "executeCustomReport",
    value: function executeCustomReport(custom_report_oid, execution_request, callback) {
      var postBody = execution_request;
      // verify the required parameter 'custom_report_oid' is set
      if (custom_report_oid === undefined || custom_report_oid === null) {
        throw new Error("Missing the required parameter 'custom_report_oid' when calling executeCustomReport");
      }
      // verify the required parameter 'execution_request' is set
      if (execution_request === undefined || execution_request === null) {
        throw new Error("Missing the required parameter 'execution_request' when calling executeCustomReport");
      }
      var pathParams = {
        'custom_report_oid': custom_report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomReportExecutionResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports/{custom_report_oid}/execute', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the executeCustomReports operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~executeCustomReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportsExecutionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute a custom reports
     * Execute a custom reports on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/CustomReportsExecutionRequest} execution_request Request to execute custom reports
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~executeCustomReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportsExecutionResponse}
     */
  }, {
    key: "executeCustomReports",
    value: function executeCustomReports(execution_request, callback) {
      var postBody = execution_request;
      // verify the required parameter 'execution_request' is set
      if (execution_request === undefined || execution_request === null) {
        throw new Error("Missing the required parameter 'execution_request' when calling executeCustomReports");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomReportsExecutionResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports/execute', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
      var postBody = query_request;
      // verify the required parameter 'query_request' is set
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
     * Callback function to receive the result of the getCustomDashboard operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getCustomDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a custom dashboard
     * Retrieve a custom dashboard 
     * @param {Number} custom_dashboard_oid 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getCustomDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomDashboardResponse}
     */
  }, {
    key: "getCustomDashboard",
    value: function getCustomDashboard(custom_dashboard_oid, callback) {
      var postBody = null;
      // verify the required parameter 'custom_dashboard_oid' is set
      if (custom_dashboard_oid === undefined || custom_dashboard_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_oid' when calling getCustomDashboard");
      }
      var pathParams = {
        'custom_dashboard_oid': custom_dashboard_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomDashboardResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_dashboards/{custom_dashboard_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCustomDashboardSchedules operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getCustomDashboardSchedulesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardSchedulesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom dashboards
     * Retrieve a custom dashboards 
     * @param {Number} custom_dashboard_oid 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getCustomDashboardSchedulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomDashboardSchedulesResponse}
     */
  }, {
    key: "getCustomDashboardSchedules",
    value: function getCustomDashboardSchedules(custom_dashboard_oid, callback) {
      var postBody = null;
      // verify the required parameter 'custom_dashboard_oid' is set
      if (custom_dashboard_oid === undefined || custom_dashboard_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_oid' when calling getCustomDashboardSchedules");
      }
      var pathParams = {
        'custom_dashboard_oid': custom_dashboard_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomDashboardSchedulesResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_dashboards/{custom_dashboard_oid}/schedules', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCustomDashboards operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getCustomDashboardsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom dashboards
     * Retrieve a custom dashboards 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getCustomDashboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomDashboardsResponse}
     */
  }, {
    key: "getCustomDashboards",
    value: function getCustomDashboards(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomDashboardsResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_dashboards', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCustomReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getCustomReportCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a custom report
     * Retrieve a custom report 
     * @param {Number} custom_report_oid 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getCustomReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportResponse}
     */
  }, {
    key: "getCustomReport",
    value: function getCustomReport(custom_report_oid, callback) {
      var postBody = null;
      // verify the required parameter 'custom_report_oid' is set
      if (custom_report_oid === undefined || custom_report_oid === null) {
        throw new Error("Missing the required parameter 'custom_report_oid' when calling getCustomReport");
      }
      var pathParams = {
        'custom_report_oid': custom_report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomReportResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports/{custom_report_oid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCustomReportAccountConfig operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getCustomReportAccountConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportAccountConfigResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom report account configuration
     * Retrieve a custom report account configuration 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getCustomReportAccountConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportAccountConfigResponse}
     */
  }, {
    key: "getCustomReportAccountConfig",
    value: function getCustomReportAccountConfig(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomReportAccountConfigResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports/account_config', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCustomReportChartPngUploadUrl operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getCustomReportChartPngUploadUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportChartPngUploadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a PNG of a custom report chart
     * Upload a PNG of a custom report chart 
     * @param {Number} custom_report_oid The report oid to upload a chart PNG for.
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getCustomReportChartPngUploadUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportChartPngUploadResponse}
     */
  }, {
    key: "getCustomReportChartPngUploadUrl",
    value: function getCustomReportChartPngUploadUrl(custom_report_oid, callback) {
      var postBody = null;
      // verify the required parameter 'custom_report_oid' is set
      if (custom_report_oid === undefined || custom_report_oid === null) {
        throw new Error("Missing the required parameter 'custom_report_oid' when calling getCustomReportChartPngUploadUrl");
      }
      var pathParams = {
        'custom_report_oid': custom_report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomReportChartPngUploadResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports/{custom_report_oid}/chart_png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getCustomReports operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~getCustomReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom reports
     * Retrieve a custom reports 
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~getCustomReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportsResponse}
     */
  }, {
    key: "getCustomReports",
    value: function getCustomReports(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomReportsResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
      var postBody = null;
      // verify the required parameter 'report_oid' is set
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
      var postBody = null;
      // verify the required parameter 'dataset_uuid' is set
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
     * Callback function to receive the result of the insertCustomDashboard operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~insertCustomDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a custom dashboard
     * Create a new custom dashboard on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/CustomDashboard} dashboard Dashboard to create
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~insertCustomDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomDashboardResponse}
     */
  }, {
    key: "insertCustomDashboard",
    value: function insertCustomDashboard(dashboard, callback) {
      var postBody = dashboard;
      // verify the required parameter 'dashboard' is set
      if (dashboard === undefined || dashboard === null) {
        throw new Error("Missing the required parameter 'dashboard' when calling insertCustomDashboard");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomDashboardResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_dashboards', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertCustomDashboardSchedule operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~insertCustomDashboardScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardScheduleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a custom dashboard schedule
     * Create a new custom dashboard schedule on the UltraCart account. 
     * @param {Number} custom_dashboard_oid 
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardSchedule} dashboard_schedule Dashboard schedule to create
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~insertCustomDashboardScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomDashboardScheduleResponse}
     */
  }, {
    key: "insertCustomDashboardSchedule",
    value: function insertCustomDashboardSchedule(custom_dashboard_oid, dashboard_schedule, callback) {
      var postBody = dashboard_schedule;
      // verify the required parameter 'custom_dashboard_oid' is set
      if (custom_dashboard_oid === undefined || custom_dashboard_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_oid' when calling insertCustomDashboardSchedule");
      }
      // verify the required parameter 'dashboard_schedule' is set
      if (dashboard_schedule === undefined || dashboard_schedule === null) {
        throw new Error("Missing the required parameter 'dashboard_schedule' when calling insertCustomDashboardSchedule");
      }
      var pathParams = {
        'custom_dashboard_oid': custom_dashboard_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomDashboardScheduleResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_dashboards/{custom_dashboard_oid}/schedules', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the insertCustomReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~insertCustomReportCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a custom report
     * Create a new custom report on the UltraCart account. 
     * @param {module:com.ultracart.admin.v2.models/CustomReport} report Report to create
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~insertCustomReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportResponse}
     */
  }, {
    key: "insertCustomReport",
    value: function insertCustomReport(report, callback) {
      var postBody = report;
      // verify the required parameter 'report' is set
      if (report === undefined || report === null) {
        throw new Error("Missing the required parameter 'report' when calling insertCustomReport");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomReportResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
      var postBody = report;
      // verify the required parameter 'report' is set
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
     * Callback function to receive the result of the updateCustomDashboard operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~updateCustomDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a custom dashboard
     * Update a custom dashboard on the UltraCart account. 
     * @param {Number} custom_dashboard_oid The dashboard oid to custom update.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboard} dashboard Dashboard to custom update
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~updateCustomDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomDashboardResponse}
     */
  }, {
    key: "updateCustomDashboard",
    value: function updateCustomDashboard(custom_dashboard_oid, dashboard, callback) {
      var postBody = dashboard;
      // verify the required parameter 'custom_dashboard_oid' is set
      if (custom_dashboard_oid === undefined || custom_dashboard_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_oid' when calling updateCustomDashboard");
      }
      // verify the required parameter 'dashboard' is set
      if (dashboard === undefined || dashboard === null) {
        throw new Error("Missing the required parameter 'dashboard' when calling updateCustomDashboard");
      }
      var pathParams = {
        'custom_dashboard_oid': custom_dashboard_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomDashboardResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_dashboards/{custom_dashboard_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateCustomDashboardSchedule operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~updateCustomDashboardScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a custom dashboard schedule
     * Update a custom dashboard schedule on the UltraCart account. 
     * @param {Number} custom_dashboard_schedule_oid The dashboard schedule oid to update.
     * @param {Number} custom_dashboard_oid The dashboard oid to update.
     * @param {module:com.ultracart.admin.v2.models/CustomDashboardSchedule} dashboard_schedule Dashboard schedule to update
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~updateCustomDashboardScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomDashboardResponse}
     */
  }, {
    key: "updateCustomDashboardSchedule",
    value: function updateCustomDashboardSchedule(custom_dashboard_schedule_oid, custom_dashboard_oid, dashboard_schedule, callback) {
      var postBody = dashboard_schedule;
      // verify the required parameter 'custom_dashboard_schedule_oid' is set
      if (custom_dashboard_schedule_oid === undefined || custom_dashboard_schedule_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_schedule_oid' when calling updateCustomDashboardSchedule");
      }
      // verify the required parameter 'custom_dashboard_oid' is set
      if (custom_dashboard_oid === undefined || custom_dashboard_oid === null) {
        throw new Error("Missing the required parameter 'custom_dashboard_oid' when calling updateCustomDashboardSchedule");
      }
      // verify the required parameter 'dashboard_schedule' is set
      if (dashboard_schedule === undefined || dashboard_schedule === null) {
        throw new Error("Missing the required parameter 'dashboard_schedule' when calling updateCustomDashboardSchedule");
      }
      var pathParams = {
        'custom_dashboard_schedule_oid': custom_dashboard_schedule_oid,
        'custom_dashboard_oid': custom_dashboard_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomDashboardResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_dashboards/{custom_dashboard_oid}/schedules/{custom_dashboard_schedule_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateCustomReport operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~updateCustomReportCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a custom report
     * Update a custom report on the UltraCart account. 
     * @param {Number} custom_report_oid The report oid to custom update.
     * @param {module:com.ultracart.admin.v2.models/CustomReport} report Report to custom update
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~updateCustomReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportResponse}
     */
  }, {
    key: "updateCustomReport",
    value: function updateCustomReport(custom_report_oid, report, callback) {
      var postBody = report;
      // verify the required parameter 'custom_report_oid' is set
      if (custom_report_oid === undefined || custom_report_oid === null) {
        throw new Error("Missing the required parameter 'custom_report_oid' when calling updateCustomReport");
      }
      // verify the required parameter 'report' is set
      if (report === undefined || report === null) {
        throw new Error("Missing the required parameter 'report' when calling updateCustomReport");
      }
      var pathParams = {
        'custom_report_oid': custom_report_oid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomReportResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports/{custom_report_oid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateCustomReportAccountConfig operation.
     * @callback module:com.ultracart.admin.v2/DatawarehouseApi~updateCustomReportAccountConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/CustomReportAccountConfigResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update custom report account config
     * Update custom report account config. 
     * @param {module:com.ultracart.admin.v2.models/CustomReportAccountConfig} account_config Account config to update
     * @param {module:com.ultracart.admin.v2/DatawarehouseApi~updateCustomReportAccountConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/CustomReportAccountConfigResponse}
     */
  }, {
    key: "updateCustomReportAccountConfig",
    value: function updateCustomReportAccountConfig(account_config, callback) {
      var postBody = account_config;
      // verify the required parameter 'account_config' is set
      if (account_config === undefined || account_config === null) {
        throw new Error("Missing the required parameter 'account_config' when calling updateCustomReportAccountConfig");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json; charset=UTF-8'];
      var accepts = ['application/json'];
      var returnType = _CustomReportAccountConfigResponse["default"];
      return this.apiClient.callApi('/datawarehouse/custom_reports/account_config', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
      var postBody = report;
      // verify the required parameter 'report_oid' is set
      if (report_oid === undefined || report_oid === null) {
        throw new Error("Missing the required parameter 'report_oid' when calling updateReport");
      }
      // verify the required parameter 'report' is set
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
}();