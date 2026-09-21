# UltraCartRestApiV2.IntegrationLogApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIntegrationLog**](IntegrationLogApi.md#getIntegrationLog) | **GET** /integration_log/query/{pk}/{sk} | Retrieve an integration log
[**getIntegrationLogFile**](IntegrationLogApi.md#getIntegrationLogFile) | **GET** /integration_log/query/{pk}/{sk}/{uuid} | Retrieve an integration log file
[**getIntegrationLogFilePdf**](IntegrationLogApi.md#getIntegrationLogFilePdf) | **GET** /integration_log/query/{pk}/{sk}/{uuid}/pdf | Retrieve an integration log file converted to PDF
[**getIntegrationLogSummariesQuery**](IntegrationLogApi.md#getIntegrationLogSummariesQuery) | **POST** /integration_log/summary/query | Retrieve integration log summaries
[**getIntegrationLogsQuery**](IntegrationLogApi.md#getIntegrationLogsQuery) | **POST** /integration_log/query | Retrieve integration logs



## getIntegrationLog

> IntegrationLogResponse getIntegrationLog(pk, sk)

Retrieve an integration log

Retrieve an integration logs from the account based identifiers 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **String**|  | 
 **sk** | **String**|  | 

### Return type

[**IntegrationLogResponse**](IntegrationLogResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIntegrationLogFile

> File getIntegrationLogFile(pk, sk, uuid)

Retrieve an integration log file

Retrieve an integration log file from the account based identifiers 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **String**|  | 
 **sk** | **String**|  | 
 **uuid** | **String**|  | 

### Return type

**File**

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## getIntegrationLogFilePdf

> File getIntegrationLogFilePdf(pk, sk, uuid)

Retrieve an integration log file converted to PDF

Retrieve an integration log file from the account based identifiers 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pk** | **String**|  | 
 **sk** | **String**|  | 
 **uuid** | **String**|  | 

### Return type

**File**

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## getIntegrationLogSummariesQuery

> IntegrationLogSummaryQueryResponse getIntegrationLogSummariesQuery(integration_log_summaries_query)

Retrieve integration log summaries

Retrieves a set of integration log summaries from the account based on a query object. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integration_log_summaries_query** | [**IntegrationLogSummaryQueryRequest**](IntegrationLogSummaryQueryRequest.md)| Integration log summaries query | 

### Return type

[**IntegrationLogSummaryQueryResponse**](IntegrationLogSummaryQueryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getIntegrationLogsQuery

> IntegrationLogQueryResponse getIntegrationLogsQuery(integration_log_query, opts)

Retrieve integration logs

Retrieves a set of integration logs from the account based on a query object. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integration_log_query** | [**IntegrationLogQueryRequest**](IntegrationLogQueryRequest.md)| Integration log query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Default 100, Max 500) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**IntegrationLogQueryResponse**](IntegrationLogQueryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

