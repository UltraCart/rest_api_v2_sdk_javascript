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
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.IntegrationLogApi();
let pk = "pk_example"; // String | 
let sk = "sk_example"; // String | 
apiInstance.getIntegrationLog(pk, sk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.IntegrationLogApi();
let pk = "pk_example"; // String | 
let sk = "sk_example"; // String | 
let uuid = "uuid_example"; // String | 
apiInstance.getIntegrationLogFile(pk, sk, uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.IntegrationLogApi();
let pk = "pk_example"; // String | 
let sk = "sk_example"; // String | 
let uuid = "uuid_example"; // String | 
apiInstance.getIntegrationLogFilePdf(pk, sk, uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.IntegrationLogApi();
let integration_log_summaries_query = new UltraCartRestApiV2.IntegrationLogSummaryQueryRequest(); // IntegrationLogSummaryQueryRequest | Integration log summaries query
apiInstance.getIntegrationLogSummariesQuery(integration_log_summaries_query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.IntegrationLogApi();
let integration_log_query = new UltraCartRestApiV2.IntegrationLogQueryRequest(); // IntegrationLogQueryRequest | Integration log query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Default 100, Max 500)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.getIntegrationLogsQuery(integration_log_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

