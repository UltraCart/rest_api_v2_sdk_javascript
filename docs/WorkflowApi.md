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

<!-- UC_START_EXAMPLE getWorkflowAgentWebsocketAuthorization -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getWorkflowAgentWebsocketAuthorization((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowAgentWebsocketAuthorization -->

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

<!-- UC_START_EXAMPLE getWorkflowAssignmentGroups -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0 // Number | Pagination of the record set.  Offset is a zero based index.
};
apiInstance.getWorkflowAssignmentGroups(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowAssignmentGroups -->

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

<!-- UC_START_EXAMPLE getWorkflowAssignmentUsers -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0 // Number | Pagination of the record set.  Offset is a zero based index.
};
apiInstance.getWorkflowAssignmentUsers(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowAssignmentUsers -->

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

<!-- UC_START_EXAMPLE getWorkflowMe -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getWorkflowMe((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowMe -->

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

<!-- UC_START_EXAMPLE getWorkflowTask -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let task_uuid = "task_uuid_example"; // String | 
apiInstance.getWorkflowTask(task_uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowTask -->

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

<!-- UC_START_EXAMPLE getWorkflowTaskAttachmentUploadUrl -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let extension = "extension_example"; // String | 
apiInstance.getWorkflowTaskAttachmentUploadUrl(extension, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowTaskAttachmentUploadUrl -->

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

<!-- UC_START_EXAMPLE getWorkflowTaskByObjectType -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let object_type = "object_type_example"; // String | 
let object_id = "object_id_example"; // String | 
apiInstance.getWorkflowTaskByObjectType(object_type, object_id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowTaskByObjectType -->

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

<!-- UC_START_EXAMPLE getWorkflowTaskOpenCount -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getWorkflowTaskOpenCount((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowTaskOpenCount -->

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

<!-- UC_START_EXAMPLE getWorkflowTaskTags -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getWorkflowTaskTags((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowTaskTags -->

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

<!-- UC_START_EXAMPLE getWorkflowTasks -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let workflow_tasks_query = new UltraCartRestApiV2.WorkflowTasksRequest(); // WorkflowTasksRequest | Workflow tasks query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Default 100, Max 500)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example" // String | The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
};
apiInstance.getWorkflowTasks(workflow_tasks_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getWorkflowTasks -->

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

<!-- UC_START_EXAMPLE insertWorkflowTask -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let workflow_task = new UltraCartRestApiV2.WorkflowTask(); // WorkflowTask | workflow task
apiInstance.insertWorkflowTask(workflow_task, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE insertWorkflowTask -->

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

<!-- UC_START_EXAMPLE updateWorkflowTask -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WorkflowApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let task_uuid = "task_uuid_example"; // String | 
let workflow_task = new UltraCartRestApiV2.WorkflowTask(); // WorkflowTask | Workflow task
apiInstance.updateWorkflowTask(task_uuid, workflow_task, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateWorkflowTask -->

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

