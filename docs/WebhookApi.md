# UltraCartRestApiV2.WebhookApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWebhook**](WebhookApi.md#deleteWebhook) | **DELETE** /webhook/webhooks/{webhookOid} | Delete a webhook
[**deleteWebhookByUrl**](WebhookApi.md#deleteWebhookByUrl) | **DELETE** /webhook/webhooks | Delete a webhook by URL
[**getWebhookLog**](WebhookApi.md#getWebhookLog) | **GET** /webhook/webhooks/{webhookOid}/logs/{requestId} | Retrieve an individual log
[**getWebhookLogSummaries**](WebhookApi.md#getWebhookLogSummaries) | **GET** /webhook/webhooks/{webhookOid}/logs | Retrieve the log summaries
[**getWebhooks**](WebhookApi.md#getWebhooks) | **GET** /webhook/webhooks | Retrieve webhooks
[**insertWebhook**](WebhookApi.md#insertWebhook) | **POST** /webhook/webhooks | Add a webhook
[**resendEvent**](WebhookApi.md#resendEvent) | **POST** /webhook/webhooks/{webhookOid}/reflow/{eventName} | Resend events to the webhook endpoint.
[**updateWebhook**](WebhookApi.md#updateWebhook) | **PUT** /webhook/webhooks/{webhookOid} | Update a webhook



## deleteWebhook

> deleteWebhook(webhookOid)

Delete a webhook

Delete a webhook on the UltraCart account. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WebhookApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let webhookOid = 56; // Number | The webhook oid to delete.
apiInstance.deleteWebhook(webhookOid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Number**| The webhook oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWebhookByUrl

> WebhookResponse deleteWebhookByUrl(webhook)

Delete a webhook by URL

Delete a webhook based upon the URL on the webhook_url matching an existing webhook. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WebhookApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let webhook = new UltraCartRestApiV2.Webhook(); // Webhook | Webhook to delete
apiInstance.deleteWebhookByUrl(webhook, (error, data, response) => {
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
 **webhook** | [**Webhook**](Webhook.md)| Webhook to delete | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## getWebhookLog

> WebhookLogResponse getWebhookLog(webhookOid, requestId)

Retrieve an individual log

Retrieves an individual log for a webhook given the webhook oid the request id. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WebhookApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let webhookOid = 56; // Number | The webhook oid that owns the log.
let requestId = "requestId_example"; // String | The request id associated with the log to view.
apiInstance.getWebhookLog(webhookOid, requestId, (error, data, response) => {
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
 **webhookOid** | **Number**| The webhook oid that owns the log. | 
 **requestId** | **String**| The request id associated with the log to view. | 

### Return type

[**WebhookLogResponse**](WebhookLogResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookLogSummaries

> WebhookLogSummariesResponse getWebhookLogSummaries(webhookOid, opts)

Retrieve the log summaries

Retrieves the log summary information for a given webhook.  This is useful for displaying all the various logs that can be viewed. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WebhookApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let webhookOid = 56; // Number | The webhook oid to retrieve log summaries for.
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call.
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_since': "_since_example" // String | Fetch log summaries that have been delivered since this date/time.
};
apiInstance.getWebhookLogSummaries(webhookOid, opts, (error, data, response) => {
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
 **webhookOid** | **Number**| The webhook oid to retrieve log summaries for. | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch log summaries that have been delivered since this date/time. | [optional] 

### Return type

[**WebhookLogSummariesResponse**](WebhookLogSummariesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooks

> WebhooksResponse getWebhooks(opts)

Retrieve webhooks

Retrieves the webhooks associated with this application. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WebhookApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call.
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_sort': "_sort_example", // String | The sort order of the webhooks.  See documentation for examples
  '_placeholders': true // Boolean | Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
};
apiInstance.getWebhooks(opts, (error, data, response) => {
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
 **_limit** | **Number**| The maximum number of records to return on this one API call. | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the webhooks.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**WebhooksResponse**](WebhooksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertWebhook

> WebhookResponse insertWebhook(webhook, opts)

Add a webhook

Adds a new webhook on the account.  If you add a new webhook with the authentication_type set to basic, but do not specify the basic_username and basic_password, UltraCart will automatically generate random ones and return them.  This allows your application to have simpler logic on the setup of a secure webhook. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WebhookApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let webhook = new UltraCartRestApiV2.Webhook(); // Webhook | Webhook to create
let opts = {
  '_placeholders': true // Boolean | Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
};
apiInstance.insertWebhook(webhook, opts, (error, data, response) => {
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
 **webhook** | [**Webhook**](Webhook.md)| Webhook to create | 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## resendEvent

> WebhookReflowResponse resendEvent(webhookOid, eventName)

Resend events to the webhook endpoint.

This method will resend events to the webhook endpoint.  This method can be used for example to send all the existing items on an account to a webhook. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WebhookApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let webhookOid = 56; // Number | The webhook oid that is receiving the reflowed events.
let eventName = "eventName_example"; // String | The event to reflow.
apiInstance.resendEvent(webhookOid, eventName, (error, data, response) => {
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
 **webhookOid** | **Number**| The webhook oid that is receiving the reflowed events. | 
 **eventName** | **String**| The event to reflow. | 

### Return type

[**WebhookReflowResponse**](WebhookReflowResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhook

> WebhookResponse updateWebhook(webhookOid, webhook, opts)

Update a webhook

Update a webhook on the account 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.WebhookApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let webhookOid = 56; // Number | The webhook oid to update.
let webhook = new UltraCartRestApiV2.Webhook(); // Webhook | Webhook to update
let opts = {
  '_placeholders': true // Boolean | Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
};
apiInstance.updateWebhook(webhookOid, webhook, opts, (error, data, response) => {
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
 **webhookOid** | **Number**| The webhook oid to update. | 
 **webhook** | [**Webhook**](Webhook.md)| Webhook to update | 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

