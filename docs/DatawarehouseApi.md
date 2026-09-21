# UltraCartRestApiV2.DatawarehouseApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzeCustomReport**](DatawarehouseApi.md#analyzeCustomReport) | **PUT** /datawarehouse/custom_reports/{custom_report_oid}/analysis | Analyze a custom report
[**deleteCustomDashboard**](DatawarehouseApi.md#deleteCustomDashboard) | **DELETE** /datawarehouse/custom_dashboards/{custom_dashboard_oid} | Delete a custom dashboard
[**deleteCustomDashboardSchedule**](DatawarehouseApi.md#deleteCustomDashboardSchedule) | **DELETE** /datawarehouse/custom_dashboards/{custom_dashboard_oid}/schedules/{custom_dashboard_schedule_oid} | Delete a custom dashboard schedule
[**deleteCustomReport**](DatawarehouseApi.md#deleteCustomReport) | **DELETE** /datawarehouse/custom_reports/{custom_report_oid} | Delete a custom report
[**deleteReport**](DatawarehouseApi.md#deleteReport) | **DELETE** /datawarehouse/reports/{report_oid} | Delete a report
[**dryRunReportQueries**](DatawarehouseApi.md#dryRunReportQueries) | **PUT** /datawarehouse/reports/dryrun | Dry run the report queries
[**executeCustomReport**](DatawarehouseApi.md#executeCustomReport) | **PUT** /datawarehouse/custom_reports/{custom_report_oid}/execute | Execute a custom report
[**executeCustomReports**](DatawarehouseApi.md#executeCustomReports) | **PUT** /datawarehouse/custom_reports/execute | Execute a custom reports
[**executeReportQueries**](DatawarehouseApi.md#executeReportQueries) | **PUT** /datawarehouse/reports/execute | Execute the report queries
[**getCustomDashboard**](DatawarehouseApi.md#getCustomDashboard) | **GET** /datawarehouse/custom_dashboards/{custom_dashboard_oid} | Get a custom dashboard
[**getCustomDashboardSchedules**](DatawarehouseApi.md#getCustomDashboardSchedules) | **GET** /datawarehouse/custom_dashboards/{custom_dashboard_oid}/schedules | Get custom dashboards
[**getCustomDashboards**](DatawarehouseApi.md#getCustomDashboards) | **GET** /datawarehouse/custom_dashboards | Get custom dashboards
[**getCustomReport**](DatawarehouseApi.md#getCustomReport) | **GET** /datawarehouse/custom_reports/{custom_report_oid} | Get a custom report
[**getCustomReportAccountConfig**](DatawarehouseApi.md#getCustomReportAccountConfig) | **GET** /datawarehouse/custom_reports/account_config | Get custom report account configuration
[**getCustomReportChartPngUploadUrl**](DatawarehouseApi.md#getCustomReportChartPngUploadUrl) | **GET** /datawarehouse/custom_reports/{custom_report_oid}/chart_png | Upload a PNG of a custom report chart
[**getCustomReports**](DatawarehouseApi.md#getCustomReports) | **GET** /datawarehouse/custom_reports | Get custom reports
[**getReport**](DatawarehouseApi.md#getReport) | **GET** /datawarehouse/reports/{report_oid} | Get a report
[**getReportDataSet**](DatawarehouseApi.md#getReportDataSet) | **GET** /datawarehouse/reports/dataset/{dataset_uuid} | Get a report data set
[**getReportDataSetPage**](DatawarehouseApi.md#getReportDataSetPage) | **GET** /datawarehouse/reports/dataset/{dataset_uuid}/pages/{page_number} | Get a report data set page
[**getReportWebsocketAuthorization**](DatawarehouseApi.md#getReportWebsocketAuthorization) | **PUT** /datawarehouse/reports/auth | Get report websocket authorization
[**getReports**](DatawarehouseApi.md#getReports) | **GET** /datawarehouse/reports | Get list of reports available
[**insertCustomDashboard**](DatawarehouseApi.md#insertCustomDashboard) | **POST** /datawarehouse/custom_dashboards | Create a custom dashboard
[**insertCustomDashboardSchedule**](DatawarehouseApi.md#insertCustomDashboardSchedule) | **POST** /datawarehouse/custom_dashboards/{custom_dashboard_oid}/schedules | Create a custom dashboard schedule
[**insertCustomReport**](DatawarehouseApi.md#insertCustomReport) | **POST** /datawarehouse/custom_reports | Create a custom report
[**insertReport**](DatawarehouseApi.md#insertReport) | **POST** /datawarehouse/reports | Create a report
[**updateCustomDashboard**](DatawarehouseApi.md#updateCustomDashboard) | **PUT** /datawarehouse/custom_dashboards/{custom_dashboard_oid} | Update a custom dashboard
[**updateCustomDashboardSchedule**](DatawarehouseApi.md#updateCustomDashboardSchedule) | **PUT** /datawarehouse/custom_dashboards/{custom_dashboard_oid}/schedules/{custom_dashboard_schedule_oid} | Update a custom dashboard schedule
[**updateCustomReport**](DatawarehouseApi.md#updateCustomReport) | **PUT** /datawarehouse/custom_reports/{custom_report_oid} | Update a custom report
[**updateCustomReportAccountConfig**](DatawarehouseApi.md#updateCustomReportAccountConfig) | **PUT** /datawarehouse/custom_reports/account_config | Update custom report account config
[**updateReport**](DatawarehouseApi.md#updateReport) | **PUT** /datawarehouse/reports/{report_oid} | Update a report



## analyzeCustomReport

> CustomReportAnalysisResponse analyzeCustomReport(custom_report_oid, analyze_request)

Analyze a custom report

Analyze a custom report on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_report_oid** | **Number**| The report oid to analyze. | 
 **analyze_request** | [**CustomReportAnalysisRequest**](CustomReportAnalysisRequest.md)| Request to analyze custom report | 

### Return type

[**CustomReportAnalysisResponse**](CustomReportAnalysisResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## deleteCustomDashboard

> deleteCustomDashboard(custom_dashboard_oid)

Delete a custom dashboard

Delete a custom dashboard on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_dashboard_oid** | **Number**| The dashboard oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCustomDashboardSchedule

> deleteCustomDashboardSchedule(custom_dashboard_schedule_oid, custom_dashboard_oid)

Delete a custom dashboard schedule

delete a custom dashboard schedule on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_dashboard_schedule_oid** | **Number**| The dashboard schedule oid to delete. | 
 **custom_dashboard_oid** | **Number**| The dashboard oid that owns the schedule. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCustomReport

> deleteCustomReport(custom_report_oid)

Delete a custom report

Delete a custom report on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_report_oid** | **Number**| The report oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteReport

> deleteReport(report_oid)

Delete a report

Delete a report on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_oid** | **Number**| The report oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dryRunReportQueries

> ReportDryRunQueriesResponse dryRunReportQueries(query_request)

Dry run the report queries

Dry run the report queries 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_request** | [**ReportDryRunQueriesRequest**](ReportDryRunQueriesRequest.md)| Dry run request | 

### Return type

[**ReportDryRunQueriesResponse**](ReportDryRunQueriesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## executeCustomReport

> CustomReportExecutionResponse executeCustomReport(custom_report_oid, execution_request)

Execute a custom report

Execute a custom report on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_report_oid** | **Number**| The report oid to execute. | 
 **execution_request** | [**CustomReportExecutionRequest**](CustomReportExecutionRequest.md)| Request to execute custom report | 

### Return type

[**CustomReportExecutionResponse**](CustomReportExecutionResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## executeCustomReports

> CustomReportsExecutionResponse executeCustomReports(execution_request)

Execute a custom reports

Execute a custom reports on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execution_request** | [**CustomReportsExecutionRequest**](CustomReportsExecutionRequest.md)| Request to execute custom reports | 

### Return type

[**CustomReportsExecutionResponse**](CustomReportsExecutionResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## executeReportQueries

> executeReportQueries(query_request)

Execute the report queries

Execute the report queries 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_request** | [**ReportExecuteQueriesRequest**](ReportExecuteQueriesRequest.md)| Query request | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCustomDashboard

> CustomDashboardResponse getCustomDashboard(custom_dashboard_oid)

Get a custom dashboard

Retrieve a custom dashboard 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_dashboard_oid** | **Number**|  | 

### Return type

[**CustomDashboardResponse**](CustomDashboardResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomDashboardSchedules

> CustomDashboardSchedulesResponse getCustomDashboardSchedules(custom_dashboard_oid)

Get custom dashboards

Retrieve a custom dashboards 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_dashboard_oid** | **Number**|  | 

### Return type

[**CustomDashboardSchedulesResponse**](CustomDashboardSchedulesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomDashboards

> CustomDashboardsResponse getCustomDashboards()

Get custom dashboards

Retrieve a custom dashboards 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**CustomDashboardsResponse**](CustomDashboardsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomReport

> CustomReportResponse getCustomReport(custom_report_oid)

Get a custom report

Retrieve a custom report 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_report_oid** | **Number**|  | 

### Return type

[**CustomReportResponse**](CustomReportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomReportAccountConfig

> CustomReportAccountConfigResponse getCustomReportAccountConfig()

Get custom report account configuration

Retrieve a custom report account configuration 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**CustomReportAccountConfigResponse**](CustomReportAccountConfigResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomReportChartPngUploadUrl

> CustomReportChartPngUploadResponse getCustomReportChartPngUploadUrl(custom_report_oid)

Upload a PNG of a custom report chart

Upload a PNG of a custom report chart 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_report_oid** | **Number**| The report oid to upload a chart PNG for. | 

### Return type

[**CustomReportChartPngUploadResponse**](CustomReportChartPngUploadResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomReports

> CustomReportsResponse getCustomReports()

Get custom reports

Retrieve a custom reports 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**CustomReportsResponse**](CustomReportsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReport

> ReportResponse getReport(report_oid)

Get a report

Retrieve a report 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_oid** | **Number**|  | 

### Return type

[**ReportResponse**](ReportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportDataSet

> ReportDataSetResponse getReportDataSet(dataset_uuid)

Get a report data set

Retrieve a report data set 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataset_uuid** | **String**|  | 

### Return type

[**ReportDataSetResponse**](ReportDataSetResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportDataSetPage

> ReportDataSetPageResponse getReportDataSetPage(dataset_uuid, page_number)

Get a report data set page

Retrieve a report data set page 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataset_uuid** | **String**|  | 
 **page_number** | **Number**|  | 

### Return type

[**ReportDataSetPageResponse**](ReportDataSetPageResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportWebsocketAuthorization

> ReportAuthResponse getReportWebsocketAuthorization()

Get report websocket authorization

Retrieve a JWT to authorize a report to make a websocket connection. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ReportAuthResponse**](ReportAuthResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReports

> ReportsResponse getReports()

Get list of reports available

Retrieve a list of reports available 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ReportsResponse**](ReportsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertCustomDashboard

> CustomDashboardResponse insertCustomDashboard(dashboard)

Create a custom dashboard

Create a new custom dashboard on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard** | [**CustomDashboard**](CustomDashboard.md)| Dashboard to create | 

### Return type

[**CustomDashboardResponse**](CustomDashboardResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertCustomDashboardSchedule

> CustomDashboardScheduleResponse insertCustomDashboardSchedule(custom_dashboard_oid, dashboard_schedule)

Create a custom dashboard schedule

Create a new custom dashboard schedule on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_dashboard_oid** | **Number**|  | 
 **dashboard_schedule** | [**CustomDashboardSchedule**](CustomDashboardSchedule.md)| Dashboard schedule to create | 

### Return type

[**CustomDashboardScheduleResponse**](CustomDashboardScheduleResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertCustomReport

> CustomReportResponse insertCustomReport(report)

Create a custom report

Create a new custom report on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report** | [**CustomReport**](CustomReport.md)| Report to create | 

### Return type

[**CustomReportResponse**](CustomReportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertReport

> ReportResponse insertReport(report)

Create a report

Create a new report on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report** | [**Report**](Report.md)| Report to create | 

### Return type

[**ReportResponse**](ReportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateCustomDashboard

> CustomDashboardResponse updateCustomDashboard(custom_dashboard_oid, dashboard)

Update a custom dashboard

Update a custom dashboard on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_dashboard_oid** | **Number**| The dashboard oid to custom update. | 
 **dashboard** | [**CustomDashboard**](CustomDashboard.md)| Dashboard to custom update | 

### Return type

[**CustomDashboardResponse**](CustomDashboardResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateCustomDashboardSchedule

> CustomDashboardResponse updateCustomDashboardSchedule(custom_dashboard_schedule_oid, custom_dashboard_oid, dashboard_schedule)

Update a custom dashboard schedule

Update a custom dashboard schedule on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_dashboard_schedule_oid** | **Number**| The dashboard schedule oid to update. | 
 **custom_dashboard_oid** | **Number**| The dashboard oid to update. | 
 **dashboard_schedule** | [**CustomDashboardSchedule**](CustomDashboardSchedule.md)| Dashboard schedule to update | 

### Return type

[**CustomDashboardResponse**](CustomDashboardResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateCustomReport

> CustomReportResponse updateCustomReport(custom_report_oid, report)

Update a custom report

Update a custom report on the UltraCart account. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_report_oid** | **Number**| The report oid to custom update. | 
 **report** | [**CustomReport**](CustomReport.md)| Report to custom update | 

### Return type

[**CustomReportResponse**](CustomReportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateCustomReportAccountConfig

> CustomReportAccountConfigResponse updateCustomReportAccountConfig(account_config)

Update custom report account config

Update custom report account config. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_config** | [**CustomReportAccountConfig**](CustomReportAccountConfig.md)| Account config to update | 

### Return type

[**CustomReportAccountConfigResponse**](CustomReportAccountConfigResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateReport

> ReportResponse updateReport(report_oid, report)

Update a report

Update a report on the UltraCart account. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_oid** | **Number**| The report oid to update. | 
 **report** | [**Report**](Report.md)| Report to update | 

### Return type

[**ReportResponse**](ReportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

