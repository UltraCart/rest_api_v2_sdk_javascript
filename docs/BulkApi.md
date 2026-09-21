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


(No example for this operation).


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


(No example for this operation).


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


(No example for this operation).


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


(No example for this operation).


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


(No example for this operation).


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


(No example for this operation).


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

