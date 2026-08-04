# UltraCartRestApiV2.BulkApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkCancelJob**](BulkApi.md#bulkCancelJob) | **DELETE** /bulk/{object}/{job_id} | Request cancellation of a bulk job
[**bulkGenerateUploadUrl**](BulkApi.md#bulkGenerateUploadUrl) | **POST** /bulk/{object}/upload-url | Generate a presigned upload URL for a bulk payload
[**bulkGetJob**](BulkApi.md#bulkGetJob) | **GET** /bulk/{object}/{job_id} | Retrieve a bulk job&#39;s status and counts
[**bulkGetJobRecords**](BulkApi.md#bulkGetJobRecords) | **GET** /bulk/{object}/{job_id}/records | Paginate a bulk job&#39;s per-record results
[**bulkListJobs**](BulkApi.md#bulkListJobs) | **GET** /bulk/{object} | List bulk jobs for the calling merchant
[**bulkSubmitJob**](BulkApi.md#bulkSubmitJob) | **POST** /bulk/{object} | Submit a bulk job



## bulkCancelJob

> bulkCancelJob(object, job_id)

Request cancellation of a bulk job

Queued jobs cancel immediately (200). In-progress jobs finalize as cancelled between records (202); already-processed records stand. 


### Example

<!-- UC_START_EXAMPLE bulkCancelJob -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.BulkApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let object = "object_example"; // String | Object type
let job_id = "job_id_example"; // String | The bulk job id
apiInstance.bulkCancelJob(object, job_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE bulkCancelJob -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object** | **String**| Object type | 
 **job_id** | **String**| The bulk job id | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bulkGenerateUploadUrl

> BulkUploadUrlResponse bulkGenerateUploadUrl(object)

Generate a presigned upload URL for a bulk payload

Returns a presigned S3 PUT URL the merchant uploads NDJSON to, plus the s3_key to pass to submit. 


### Example

<!-- UC_START_EXAMPLE bulkGenerateUploadUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.BulkApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let object = "object_example"; // String | Object type
apiInstance.bulkGenerateUploadUrl(object, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE bulkGenerateUploadUrl -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object** | **String**| Object type | 

### Return type

[**BulkUploadUrlResponse**](BulkUploadUrlResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bulkGetJob

> BulkJobResponse bulkGetJob(object, job_id)

Retrieve a bulk job&#39;s status and counts


### Example

<!-- UC_START_EXAMPLE bulkGetJob -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.BulkApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let object = "object_example"; // String | Object type
let job_id = "job_id_example"; // String | The bulk job id
apiInstance.bulkGetJob(object, job_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE bulkGetJob -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object** | **String**| Object type | 
 **job_id** | **String**| The bulk job id | 

### Return type

[**BulkJobResponse**](BulkJobResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bulkGetJobRecords

> BulkRecordsResponse bulkGetJobRecords(object, job_id, opts)

Paginate a bulk job&#39;s per-record results


### Example

<!-- UC_START_EXAMPLE bulkGetJobRecords -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.BulkApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let object = "object_example"; // String | Object type
let job_id = "job_id_example"; // String | The bulk job id
let opts = {
  'status': "status_example", // String | Filter by per-record result status (success, failed, duplicate)
  'cursor': "cursor_example", // String | Opaque pagination cursor
  'limit': 56 // Number | Page size (default 100, max 1000)
};
apiInstance.bulkGetJobRecords(object, job_id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE bulkGetJobRecords -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object** | **String**| Object type | 
 **job_id** | **String**| The bulk job id | 
 **status** | **String**| Filter by per-record result status (success, failed, duplicate) | [optional] 
 **cursor** | **String**| Opaque pagination cursor | [optional] 
 **limit** | **Number**| Page size (default 100, max 1000) | [optional] 

### Return type

[**BulkRecordsResponse**](BulkRecordsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bulkListJobs

> BulkJobsResponse bulkListJobs(object, opts)

List bulk jobs for the calling merchant


### Example

<!-- UC_START_EXAMPLE bulkListJobs -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.BulkApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let object = "object_example"; // String | Object type
let opts = {
  'status': "status_example", // String | Filter by job status
  'cursor': "cursor_example", // String | Opaque pagination cursor
  'limit': 56 // Number | Page size (default 100, max 1000)
};
apiInstance.bulkListJobs(object, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE bulkListJobs -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object** | **String**| Object type | 
 **status** | **String**| Filter by job status | [optional] 
 **cursor** | **String**| Opaque pagination cursor | [optional] 
 **limit** | **Number**| Page size (default 100, max 1000) | [optional] 

### Return type

[**BulkJobsResponse**](BulkJobsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bulkSubmitJob

> BulkJobResponse bulkSubmitJob(object, bulk_job)

Submit a bulk job

Submits a job referencing a previously uploaded NDJSON object. One active job per merchant; additional submissions queue. The bulk surface is write-only (insert / upsert); it has no bulk read or export operation. 


### Example

<!-- UC_START_EXAMPLE bulkSubmitJob -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.BulkApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let object = "object_example"; // String | Object type
let bulk_job = new UltraCartRestApiV2.BulkJobRequest(); // BulkJobRequest | Bulk job submission
apiInstance.bulkSubmitJob(object, bulk_job, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE bulkSubmitJob -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object** | **String**| Object type | 
 **bulk_job** | [**BulkJobRequest**](BulkJobRequest.md)| Bulk job submission | 

### Return type

[**BulkJobResponse**](BulkJobResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

