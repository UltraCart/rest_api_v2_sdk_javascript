# UltraCartRestApiV2.WebhookApi

All URIs are relative to *https://secure.ultracart.com/rest/admin/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookWebhooksGet**](WebhookApi.md#webhookWebhooksGet) | **GET** /webhook/webhooks | Retrieve webhooks
[**webhookWebhooksPost**](WebhookApi.md#webhookWebhooksPost) | **POST** /webhook/webhooks | Add a webhook
[**webhookWebhooksWebhookOidDelete**](WebhookApi.md#webhookWebhooksWebhookOidDelete) | **DELETE** /webhook/webhooks/{webhookOid} | Delete a webhook
[**webhookWebhooksWebhookOidLogsGet**](WebhookApi.md#webhookWebhooksWebhookOidLogsGet) | **GET** /webhook/webhooks/{webhookOid}/logs | Retrieve the log summaries
[**webhookWebhooksWebhookOidLogsRequestIdGet**](WebhookApi.md#webhookWebhooksWebhookOidLogsRequestIdGet) | **GET** /webhook/webhooks/{webhookOid}/logs/{requestId} | Retrieve an individual log
[**webhookWebhooksWebhookOidPut**](WebhookApi.md#webhookWebhooksWebhookOidPut) | **PUT** /webhook/webhooks/{webhookOid} | Update a webhook
[**webhookWebhooksWebhookOidReflowEventNamePost**](WebhookApi.md#webhookWebhooksWebhookOidReflowEventNamePost) | **POST** /webhook/webhooks/{webhookOid}/reflow/{eventName} | Resend events to the webhook endpoint.
[**webhookWebhooksWebhookOidSamplesGet**](WebhookApi.md#webhookWebhooksWebhookOidSamplesGet) | **GET** /webhook/webhooks/{webhookOid}/samples | Retrieve a sample notification.
[**webhookWebhooksWebhookOidValidatePost**](WebhookApi.md#webhookWebhooksWebhookOidValidatePost) | **POST** /webhook/webhooks/{webhookOid}/validate | Send test message to an endpoint.


<a name="webhookWebhooksGet"></a>
# **webhookWebhooksGet**
> WebhooksResponse webhookWebhooksGet()

Retrieve webhooks

Retrieves the webhooks associated with this application. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookWebhooksGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WebhooksResponse**](WebhooksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookWebhooksPost"></a>
# **webhookWebhooksPost**
> WebhooksResponse webhookWebhooksPost(webhook)

Add a webhook

Adds a new webhook on the account 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var webhook = new UltraCartRestApiV2.Webhook(); // Webhook | Webhook to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookWebhooksPost(webhook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md)| Webhook to create | 

### Return type

[**WebhooksResponse**](WebhooksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookWebhooksWebhookOidDelete"></a>
# **webhookWebhooksWebhookOidDelete**
> webhookWebhooksWebhookOidDelete(webhookOid)

Delete a webhook

Delete a webhook on the UltraCart account. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var webhookOid = 56; // Integer | The webhook oid to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webhookWebhooksWebhookOidDelete(webhookOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Integer**| The webhook oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookWebhooksWebhookOidLogsGet"></a>
# **webhookWebhooksWebhookOidLogsGet**
> WebhookLogSummariesResponse webhookWebhooksWebhookOidLogsGet(webhookOid)

Retrieve the log summaries

Retrieves the log summary information for a given webhook.  This is useful for displaying all the various logs that can be viewed. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var webhookOid = 56; // Integer | The webhook oid to retrieve log summaries for.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookWebhooksWebhookOidLogsGet(webhookOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Integer**| The webhook oid to retrieve log summaries for. | 

### Return type

[**WebhookLogSummariesResponse**](WebhookLogSummariesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookWebhooksWebhookOidLogsRequestIdGet"></a>
# **webhookWebhooksWebhookOidLogsRequestIdGet**
> WebhookLogResponse webhookWebhooksWebhookOidLogsRequestIdGet(webhookOid, requestId)

Retrieve an individual log

Retrieves an individual log for a webhook given the webhook oid the request id. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var webhookOid = 56; // Integer | The webhook oid that owns the log.

var requestId = "requestId_example"; // String | The request id associated with the log to view.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookWebhooksWebhookOidLogsRequestIdGet(webhookOid, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Integer**| The webhook oid that owns the log. | 
 **requestId** | **String**| The request id associated with the log to view. | 

### Return type

[**WebhookLogResponse**](WebhookLogResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookWebhooksWebhookOidPut"></a>
# **webhookWebhooksWebhookOidPut**
> WebhooksResponse webhookWebhooksWebhookOidPut(webhook, webhookOid)

Update a webhook

Update a webhook on the account 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var webhook = new UltraCartRestApiV2.Webhook(); // Webhook | Webhook to update

var webhookOid = 56; // Integer | The webhook oid to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookWebhooksWebhookOidPut(webhook, webhookOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md)| Webhook to update | 
 **webhookOid** | **Integer**| The webhook oid to update. | 

### Return type

[**WebhooksResponse**](WebhooksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookWebhooksWebhookOidReflowEventNamePost"></a>
# **webhookWebhooksWebhookOidReflowEventNamePost**
> WebhookSampleRequestResponse webhookWebhooksWebhookOidReflowEventNamePost(webhookOid, eventName)

Resend events to the webhook endpoint.

This method will resend events to the webhook endpoint.  This method can be used for example to send all the existing items on an account to a webhook. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var webhookOid = 56; // Integer | The webhook oid that is receiving the reflowed events.

var eventName = "eventName_example"; // String | The event to reflow.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookWebhooksWebhookOidReflowEventNamePost(webhookOid, eventName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Integer**| The webhook oid that is receiving the reflowed events. | 
 **eventName** | **String**| The event to reflow. | 

### Return type

[**WebhookSampleRequestResponse**](WebhookSampleRequestResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookWebhooksWebhookOidSamplesGet"></a>
# **webhookWebhooksWebhookOidSamplesGet**
> WebhookSampleRequestResponse webhookWebhooksWebhookOidSamplesGet(webhookOid)

Retrieve a sample notification.

Retrieves a sample notification for the webhook.  This provides as example of what the notifications that can be delivered will look like. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var webhookOid = 56; // Integer | The webhook oid to retrieve samples for.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookWebhooksWebhookOidSamplesGet(webhookOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Integer**| The webhook oid to retrieve samples for. | 

### Return type

[**WebhookSampleRequestResponse**](WebhookSampleRequestResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webhookWebhooksWebhookOidValidatePost"></a>
# **webhookWebhooksWebhookOidValidatePost**
> WebhookLogResponse webhookWebhooksWebhookOidValidatePost(samples, webhookOid)

Send test message to an endpoint.

Performs a test of the webhook endpoint given the specified sample request and returns the log associated with the response. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.WebhookApi();

var samples = new UltraCartRestApiV2.WebhookSampleRequest(); // WebhookSampleRequest | Samples to send in the test

var webhookOid = 56; // Integer | The webhook oid that is being tested.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webhookWebhooksWebhookOidValidatePost(samples, webhookOid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **samples** | [**WebhookSampleRequest**](WebhookSampleRequest.md)| Samples to send in the test | 
 **webhookOid** | **Integer**| The webhook oid that is being tested. | 

### Return type

[**WebhookLogResponse**](WebhookLogResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

