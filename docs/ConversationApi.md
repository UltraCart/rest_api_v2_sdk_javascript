# UltraCartRestApiV2.ConversationApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAgentKeepAlive**](ConversationApi.md#getAgentKeepAlive) | **GET** /conversation/agent/keepalive | Agent keep alive
[**getAgentWebsocketAuthorization**](ConversationApi.md#getAgentWebsocketAuthorization) | **PUT** /conversation/agent/auth | Get agent websocket authorization
[**getConversation**](ConversationApi.md#getConversation) | **GET** /conversation/conversations/{conversation_uuid} | Retrieve a conversation
[**getConversationContext**](ConversationApi.md#getConversationContext) | **PUT** /conversation/conversations/{conversation_uuid}/context | Get a webchat conversation context
[**getConversationMessages**](ConversationApi.md#getConversationMessages) | **GET** /conversation/conversations/{conversation_uuid}/messages/{since} | Retrieve conversation messages
[**getConversationMultimediaUploadUrl**](ConversationApi.md#getConversationMultimediaUploadUrl) | **GET** /conversation/upload_url/{extension} | Get a presigned conersation multimedia upload URL
[**getConversationWebchatQueueStatuses**](ConversationApi.md#getConversationWebchatQueueStatuses) | **GET** /conversation/conversations/queues/statuses | Retrieve a conversation webchat queue statuses
[**getConversations**](ConversationApi.md#getConversations) | **GET** /conversation/conversations | Retrieve a list of conversation summaries newest to oldest
[**joinConversation**](ConversationApi.md#joinConversation) | **PUT** /conversation/conversations/{conversation_uuid}/join | Join a conversation
[**leaveConversation**](ConversationApi.md#leaveConversation) | **DELETE** /conversation/conversations/{conversation_uuid}/leave | Leave a conversation
[**markReadConversation**](ConversationApi.md#markReadConversation) | **PUT** /conversation/conversations/{conversation_uuid}/markread | Mark a conversation as read
[**startConversation**](ConversationApi.md#startConversation) | **PUT** /conversation/conversations | Start a conversation
[**updateConversationWebchatQueueStatus**](ConversationApi.md#updateConversationWebchatQueueStatus) | **PUT** /conversation/conversations/queues/{queue_name}/status | Update status within the queue


<a name="getAgentKeepAlive"></a>
# **getAgentKeepAlive**
> getAgentKeepAlive()

Agent keep alive

Called periodically by the conversation API to keep the session alive. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAgentKeepAlive(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgentWebsocketAuthorization"></a>
# **getAgentWebsocketAuthorization**
> ConversationAgentAuthResponse getAgentWebsocketAuthorization()

Get agent websocket authorization

Retrieve a JWT to authorize an agent to make a websocket connection. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgentWebsocketAuthorization(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ConversationAgentAuthResponse**](ConversationAgentAuthResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConversation"></a>
# **getConversation**
> ConversationResponse getConversation(conversation_uuid, opts)

Retrieve a conversation

Retrieve a conversation including the participants and messages 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var conversation_uuid = "conversation_uuid_example"; // String | 

var opts = { 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConversation(conversation_uuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 
 **limit** | **Number**|  | [optional] 

### Return type

[**ConversationResponse**](ConversationResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConversationContext"></a>
# **getConversationContext**
> ConversationWebchatContext getConversationContext(conversation_uuid)

Get a webchat conversation context

Get a webchat conversation context 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var conversation_uuid = "conversation_uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConversationContext(conversation_uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 

### Return type

[**ConversationWebchatContext**](ConversationWebchatContext.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConversationMessages"></a>
# **getConversationMessages**
> ConversationMessagesResponse getConversationMessages(conversation_uuid, since, opts)

Retrieve conversation messages

Retrieve conversation messages since a particular time 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var conversation_uuid = "conversation_uuid_example"; // String | 

var since = 789; // Number | 

var opts = { 
  'limit': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConversationMessages(conversation_uuid, since, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 
 **since** | **Number**|  | 
 **limit** | **Number**|  | [optional] 

### Return type

[**ConversationMessagesResponse**](ConversationMessagesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConversationMultimediaUploadUrl"></a>
# **getConversationMultimediaUploadUrl**
> ConversationMultimediaUploadUrlResponse getConversationMultimediaUploadUrl(extension)

Get a presigned conersation multimedia upload URL

Get a presigned conersation multimedia upload URL 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var extension = "extension_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConversationMultimediaUploadUrl(extension, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extension** | **String**|  | 

### Return type

[**ConversationMultimediaUploadUrlResponse**](ConversationMultimediaUploadUrlResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConversationWebchatQueueStatuses"></a>
# **getConversationWebchatQueueStatuses**
> ConversationWebchatQueueStatusesResponse getConversationWebchatQueueStatuses()

Retrieve a conversation webchat queue statuses

Retrieve a conversation webchat queue statuses including agent status and queue entries 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();



var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConversationWebchatQueueStatuses(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ConversationWebchatQueueStatusesResponse**](ConversationWebchatQueueStatusesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConversations"></a>
# **getConversations**
> ConversationsResponse getConversations(opts)

Retrieve a list of conversation summaries newest to oldest

Retrieve a list of conversation summaries that are ordered newest to oldest, include the most recent message and whether its been read. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var opts = { 
  'medium': "medium_example", // String | 
  'before': "before_example", // String | 
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0 // Number | Pagination of the record set.  Offset is a zero based index.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConversations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **medium** | **String**|  | [optional] 
 **before** | **String**|  | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]

### Return type

[**ConversationsResponse**](ConversationsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="joinConversation"></a>
# **joinConversation**
> joinConversation(conversation_uuid)

Join a conversation

Join a conversation 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var conversation_uuid = "conversation_uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.joinConversation(conversation_uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="leaveConversation"></a>
# **leaveConversation**
> leaveConversation(conversation_uuid)

Leave a conversation

Leave a conversation 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var conversation_uuid = "conversation_uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.leaveConversation(conversation_uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="markReadConversation"></a>
# **markReadConversation**
> markReadConversation(conversation_uuid)

Mark a conversation as read

Mark a conversation as read 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var conversation_uuid = "conversation_uuid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.markReadConversation(conversation_uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversation_uuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="startConversation"></a>
# **startConversation**
> ConversationStartResponse startConversation(start_request)

Start a conversation

Start a new conversation 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var start_request = new UltraCartRestApiV2.ConversationStartRequest(); // ConversationStartRequest | Start request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.startConversation(start_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_request** | [**ConversationStartRequest**](ConversationStartRequest.md)| Start request | 

### Return type

[**ConversationStartResponse**](ConversationStartResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateConversationWebchatQueueStatus"></a>
# **updateConversationWebchatQueueStatus**
> updateConversationWebchatQueueStatus(queue_name, status_request)

Update status within the queue

Update status within the queue 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');

// Create a Simple Key: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/38688545/API+Simple+Key
var simpleKey = "109ee846ee69f50177018ab12f008a00748a25aa28dbdc0177018ab12f008a00";
UltraCartRestApiV2.ApiClient.usingApiKey(simpleKey, false)
var apiInstance = new UltraCartRestApiV2.ConversationApi();


var queue_name = "queue_name_example"; // String | 

var status_request = new UltraCartRestApiV2.ConversationWebchatQueueStatusUpdateRequest(); // ConversationWebchatQueueStatusUpdateRequest | Status request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateConversationWebchatQueueStatus(queue_name, status_request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue_name** | **String**|  | 
 **status_request** | [**ConversationWebchatQueueStatusUpdateRequest**](ConversationWebchatQueueStatusUpdateRequest.md)| Status request | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

