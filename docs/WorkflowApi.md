# UltraCartRestApiV2.WorkflowApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWorkflowAgentWebsocketAuthorization**](WorkflowApi.md#getWorkflowAgentWebsocketAuthorization) | **PUT** /workflow/agent/auth | Get agent websocket authorization
[**getWorkflowAssignmentGroups**](WorkflowApi.md#getWorkflowAssignmentGroups) | **GET** /workflow/assignment_groups | Retrieve a list of groups that workflow tasks can be assigned to
[**getWorkflowAssignmentUsers**](WorkflowApi.md#getWorkflowAssignmentUsers) | **GET** /workflow/assignment_users | Retrieve a list of users that workflow tasks can be assigned to
[**getWorkflowMe**](WorkflowApi.md#getWorkflowMe) | **GET** /workflow/me | Retrieve a user object for myself
[**getWorkflowTask**](WorkflowApi.md#getWorkflowTask) | **GET** /workflow/tasks/{task_uuid} | Retrieve a workflow task
[**getWorkflowTaskAttachmentUploadUrl**](WorkflowApi.md#getWorkflowTaskAttachmentUploadUrl) | **GET** /workflow/tasks/attachments/{extension} | Get a presigned workflow task attachment upload URL
[**getWorkflowTaskByObjectType**](WorkflowApi.md#getWorkflowTaskByObjectType) | **GET** /workflow/tasks/by/{object_type}/{object_id} | Retrieve a workflow task by object type and id
[**getWorkflowTaskOpenCount**](WorkflowApi.md#getWorkflowTaskOpenCount) | **GET** /workflow/tasks/open_count | Retrieve workflow task open count
[**getWorkflowTaskTags**](WorkflowApi.md#getWorkflowTaskTags) | **GET** /workflow/tasks/tags | Get a list of existing workflow task tags
[**getWorkflowTasks**](WorkflowApi.md#getWorkflowTasks) | **POST** /workflow/tasks/search | Search workflow tasks
[**insertWorkflowTask**](WorkflowApi.md#insertWorkflowTask) | **POST** /workflow/tasks | Insert a workflow task
[**updateWorkflowTask**](WorkflowApi.md#updateWorkflowTask) | **PUT** /workflow/tasks/{task_uuid} | Update a workflow task



## getWorkflowAgentWebsocketAuthorization

> WorkflowAgentAuthResponse getWorkflowAgentWebsocketAuthorization()

Get agent websocket authorization

Retrieve a JWT to authorize an agent to make a websocket connection. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**WorkflowAgentAuthResponse**](WorkflowAgentAuthResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowAssignmentGroups

> WorkflowGroupsResponse getWorkflowAssignmentGroups(opts)

Retrieve a list of groups that workflow tasks can be assigned to

Retrieve a list of groups that workflow tasks can be assigned to 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]

### Return type

[**WorkflowGroupsResponse**](WorkflowGroupsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowAssignmentUsers

> WorkflowUsersResponse getWorkflowAssignmentUsers(opts)

Retrieve a list of users that workflow tasks can be assigned to

Retrieve a list of users that workflow tasks can be assigned to 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]

### Return type

[**WorkflowUsersResponse**](WorkflowUsersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowMe

> WorkflowUserResponse getWorkflowMe()

Retrieve a user object for myself

Retrieve a user object for myself 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**WorkflowUserResponse**](WorkflowUserResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTask

> WorkflowTaskResponse getWorkflowTask(task_uuid)

Retrieve a workflow task

Retrieve a workflow task 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_uuid** | **String**|  | 

### Return type

[**WorkflowTaskResponse**](WorkflowTaskResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTaskAttachmentUploadUrl

> WorkflowAttachmentUploadUrlResponse getWorkflowTaskAttachmentUploadUrl(extension)

Get a presigned workflow task attachment upload URL

Get a presigned workflow task attachment upload URL 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extension** | **String**|  | 

### Return type

[**WorkflowAttachmentUploadUrlResponse**](WorkflowAttachmentUploadUrlResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTaskByObjectType

> WorkflowTasksResponse getWorkflowTaskByObjectType(object_type, object_id)

Retrieve a workflow task by object type and id

Retrieve a workflow task by object type and id 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object_type** | **String**|  | 
 **object_id** | **String**|  | 

### Return type

[**WorkflowTasksResponse**](WorkflowTasksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTaskOpenCount

> WorkflowTaskOpenCountResponse getWorkflowTaskOpenCount()

Retrieve workflow task open count

Retrieve workflow task open count 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**WorkflowTaskOpenCountResponse**](WorkflowTaskOpenCountResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTaskTags

> WorkflowTaskTagsResponse getWorkflowTaskTags()

Get a list of existing workflow task tags

Retrieves a unique list of all the existing workflow task tags. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**WorkflowTaskTagsResponse**](WorkflowTaskTagsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTasks

> WorkflowTasksResponse getWorkflowTasks(workflow_tasks_query, opts)

Search workflow tasks

Retrieves a set of workflow tasks from the account based on a query object. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_tasks_query** | [**WorkflowTasksRequest**](WorkflowTasksRequest.md)| Workflow tasks query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Default 100, Max 500) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**WorkflowTasksResponse**](WorkflowTasksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertWorkflowTask

> WorkflowTaskResponse insertWorkflowTask(workflow_task)

Insert a workflow task

Insert a workflow task 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_task** | [**WorkflowTask**](WorkflowTask.md)| workflow task | 

### Return type

[**WorkflowTaskResponse**](WorkflowTaskResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWorkflowTask

> WorkflowTaskResponse updateWorkflowTask(task_uuid, workflow_task)

Update a workflow task

Update a workflow task 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_uuid** | **String**|  | 
 **workflow_task** | [**WorkflowTask**](WorkflowTask.md)| Workflow task | 

### Return type

[**WorkflowTaskResponse**](WorkflowTaskResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

