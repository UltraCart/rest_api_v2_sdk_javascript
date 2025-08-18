# UltraCartRestApiV2.DatawarehouseApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
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



## deleteCustomDashboard

> deleteCustomDashboard(custom_dashboard_oid)

Delete a custom dashboard

Delete a custom dashboard on the UltraCart account. 


### Example

<!-- UC_START_EXAMPLE deleteCustomDashboard -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_dashboard_oid = 56; // Number | The dashboard oid to delete.
apiInstance.deleteCustomDashboard(custom_dashboard_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteCustomDashboard -->

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

<!-- UC_START_EXAMPLE deleteCustomDashboardSchedule -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_dashboard_schedule_oid = 56; // Number | The dashboard schedule oid to delete.
let custom_dashboard_oid = 56; // Number | The dashboard oid that owns the schedule.
apiInstance.deleteCustomDashboardSchedule(custom_dashboard_schedule_oid, custom_dashboard_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteCustomDashboardSchedule -->

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

<!-- UC_START_EXAMPLE deleteCustomReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_report_oid = 56; // Number | The report oid to delete.
apiInstance.deleteCustomReport(custom_report_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteCustomReport -->

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

<!-- UC_START_EXAMPLE deleteReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let report_oid = 56; // Number | The report oid to delete.
apiInstance.deleteReport(report_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteReport -->

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

<!-- UC_START_EXAMPLE dryRunReportQueries -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let query_request = new UltraCartRestApiV2.ReportDryRunQueriesRequest(); // ReportDryRunQueriesRequest | Dry run request
apiInstance.dryRunReportQueries(query_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE dryRunReportQueries -->

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

<!-- UC_START_EXAMPLE executeCustomReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_report_oid = 56; // Number | The report oid to execute.
let execution_request = new UltraCartRestApiV2.CustomReportExecutionRequest(); // CustomReportExecutionRequest | Request to execute custom report
apiInstance.executeCustomReport(custom_report_oid, execution_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE executeCustomReport -->

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

<!-- UC_START_EXAMPLE executeCustomReports -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let execution_request = new UltraCartRestApiV2.CustomReportsExecutionRequest(); // CustomReportsExecutionRequest | Request to execute custom reports
apiInstance.executeCustomReports(execution_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE executeCustomReports -->

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

<!-- UC_START_EXAMPLE executeReportQueries -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let query_request = new UltraCartRestApiV2.ReportExecuteQueriesRequest(); // ReportExecuteQueriesRequest | Query request
apiInstance.executeReportQueries(query_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE executeReportQueries -->

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

<!-- UC_START_EXAMPLE getCustomDashboard -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_dashboard_oid = 56; // Number | 
apiInstance.getCustomDashboard(custom_dashboard_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomDashboard -->

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

<!-- UC_START_EXAMPLE getCustomDashboardSchedules -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_dashboard_oid = 56; // Number | 
apiInstance.getCustomDashboardSchedules(custom_dashboard_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomDashboardSchedules -->

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

<!-- UC_START_EXAMPLE getCustomDashboards -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getCustomDashboards((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomDashboards -->

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

<!-- UC_START_EXAMPLE getCustomReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_report_oid = 56; // Number | 
apiInstance.getCustomReport(custom_report_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomReport -->

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

<!-- UC_START_EXAMPLE getCustomReportAccountConfig -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getCustomReportAccountConfig((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomReportAccountConfig -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**CustomReportAccountConfigResponse**](CustomReportAccountConfigResponse.md)

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

<!-- UC_START_EXAMPLE getCustomReports -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getCustomReports((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getCustomReports -->

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

<!-- UC_START_EXAMPLE getReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let report_oid = 56; // Number | 
apiInstance.getReport(report_oid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getReport -->

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

<!-- UC_START_EXAMPLE getReportDataSet -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let dataset_uuid = "dataset_uuid_example"; // String | 
apiInstance.getReportDataSet(dataset_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getReportDataSet -->

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

<!-- UC_START_EXAMPLE getReportDataSetPage -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let dataset_uuid = "dataset_uuid_example"; // String | 
let page_number = 56; // Number | 
apiInstance.getReportDataSetPage(dataset_uuid, page_number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getReportDataSetPage -->

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

<!-- UC_START_EXAMPLE getReportWebsocketAuthorization -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getReportWebsocketAuthorization((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getReportWebsocketAuthorization -->

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

<!-- UC_START_EXAMPLE getReports -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getReports((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getReports -->

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

<!-- UC_START_EXAMPLE insertCustomDashboard -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let dashboard = new UltraCartRestApiV2.CustomDashboard(); // CustomDashboard | Dashboard to create
apiInstance.insertCustomDashboard(dashboard, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertCustomDashboard -->

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

<!-- UC_START_EXAMPLE insertCustomDashboardSchedule -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_dashboard_oid = 56; // Number | 
let dashboard_schedule = new UltraCartRestApiV2.CustomDashboardSchedule(); // CustomDashboardSchedule | Dashboard schedule to create
apiInstance.insertCustomDashboardSchedule(custom_dashboard_oid, dashboard_schedule, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertCustomDashboardSchedule -->

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

<!-- UC_START_EXAMPLE insertCustomReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let report = new UltraCartRestApiV2.CustomReport(); // CustomReport | Report to create
apiInstance.insertCustomReport(report, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertCustomReport -->

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

<!-- UC_START_EXAMPLE insertReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let report = new UltraCartRestApiV2.Report(); // Report | Report to create
apiInstance.insertReport(report, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertReport -->

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

<!-- UC_START_EXAMPLE updateCustomDashboard -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_dashboard_oid = 56; // Number | The dashboard oid to custom update.
let dashboard = new UltraCartRestApiV2.CustomDashboard(); // CustomDashboard | Dashboard to custom update
apiInstance.updateCustomDashboard(custom_dashboard_oid, dashboard, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateCustomDashboard -->

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

<!-- UC_START_EXAMPLE updateCustomDashboardSchedule -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_dashboard_schedule_oid = 56; // Number | The dashboard schedule oid to update.
let custom_dashboard_oid = 56; // Number | The dashboard oid to update.
let dashboard_schedule = new UltraCartRestApiV2.CustomDashboardSchedule(); // CustomDashboardSchedule | Dashboard schedule to update
apiInstance.updateCustomDashboardSchedule(custom_dashboard_schedule_oid, custom_dashboard_oid, dashboard_schedule, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateCustomDashboardSchedule -->

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

<!-- UC_START_EXAMPLE updateCustomReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let custom_report_oid = 56; // Number | The report oid to custom update.
let report = new UltraCartRestApiV2.CustomReport(); // CustomReport | Report to custom update
apiInstance.updateCustomReport(custom_report_oid, report, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateCustomReport -->

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

<!-- UC_START_EXAMPLE updateCustomReportAccountConfig -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let account_config = new UltraCartRestApiV2.CustomReportAccountConfig(); // CustomReportAccountConfig | Account config to update
apiInstance.updateCustomReportAccountConfig(account_config, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateCustomReportAccountConfig -->

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

<!-- UC_START_EXAMPLE updateReport -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.DatawarehouseApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let report_oid = 56; // Number | The report oid to update.
let report = new UltraCartRestApiV2.Report(); // Report | Report to update
apiInstance.updateReport(report_oid, report, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateReport -->

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

