# UltraCartRestApiV2.ConversationEmbedApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**embedOauthDeviceAuthorize**](ConversationEmbedApi.md#embedOauthDeviceAuthorize) | **POST** /conversation_embed/oauth/device/authorize | Initiate a device authorization flow for an embed widget.
[**embedOauthRevoke**](ConversationEmbedApi.md#embedOauthRevoke) | **POST** /conversation_embed/oauth/device/revoke | Revoke an embed widget access or refresh token.
[**embedOauthToken**](ConversationEmbedApi.md#embedOauthToken) | **POST** /conversation_embed/oauth/device/token | Exchange a device_code or refresh_token for an access token (embed widget).
[**getEmbedPbxAuth**](ConversationEmbedApi.md#getEmbedPbxAuth) | **PUT** /conversation_embed/pbx-auth | Get PBX authorization for the embedded softphone widget.



## embedOauthDeviceAuthorize

> embedOauthDeviceAuthorize(client_id, scope)

Initiate a device authorization flow for an embed widget.

RFC 8628 device authorization. Only the embed widget&#39;s client_id and the crm_embed scope are accepted. 


### Example

<!-- UC_START_EXAMPLE embedOauthDeviceAuthorize -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationEmbedApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let client_id = "client_id_example"; // String | The embed widget OAuth client_id.
let scope = "scope_example"; // String | The application-level scope (must be 'crm_embed').
apiInstance.embedOauthDeviceAuthorize(client_id, scope, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE embedOauthDeviceAuthorize -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **String**| The embed widget OAuth client_id. | 
 **scope** | **String**| The application-level scope (must be &#39;crm_embed&#39;). | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## embedOauthRevoke

> embedOauthRevoke(client_id, token)

Revoke an embed widget access or refresh token.

RFC 7009 style â€” the token itself is proof of possession. Accepts either an access token or a refresh token in the &#39;token&#39; parameter. 


### Example

<!-- UC_START_EXAMPLE embedOauthRevoke -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationEmbedApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let client_id = "client_id_example"; // String | The embed widget OAuth client_id.
let token = "token_example"; // String | The token to revoke (access token or refresh token).
apiInstance.embedOauthRevoke(client_id, token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE embedOauthRevoke -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **String**| The embed widget OAuth client_id. | 
 **token** | **String**| The token to revoke (access token or refresh token). | 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## embedOauthToken

> embedOauthToken(client_id, grant_type, opts)

Exchange a device_code or refresh_token for an access token (embed widget).

Accepts grant_type&#x3D;urn:ietf:params:oauth:grant-type:device_code or grant_type&#x3D;refresh_token. Other grant types are rejected. Access tokens issued here expire in 60 minutes. 


### Example

<!-- UC_START_EXAMPLE embedOauthToken -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationEmbedApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let client_id = "client_id_example"; // String | The embed widget OAuth client_id.
let grant_type = "grant_type_example"; // String | Grant type.
let opts = {
  'device_code': "device_code_example", // String | The device code received from /oauth/device/authorize (required for device_code grant).
  'refresh_token': "refresh_token_example" // String | The refresh token (required for refresh_token grant).
};
apiInstance.embedOauthToken(client_id, grant_type, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE embedOauthToken -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **String**| The embed widget OAuth client_id. | 
 **grant_type** | **String**| Grant type. | 
 **device_code** | **String**| The device code received from /oauth/device/authorize (required for device_code grant). | [optional] 
 **refresh_token** | **String**| The refresh token (required for refresh_token grant). | [optional] 

### Return type

null (empty response body)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## getEmbedPbxAuth

> ConversationEmbedPbxAuthResponse getEmbedPbxAuth()

Get PBX authorization for the embedded softphone widget.

Returns a narrow subset of agent auth fields â€” only what the softphone widget needs to connect to the PBX relay. Twilio tokens, conversation JWTs, and chat/customer permissions are intentionally excluded. 


### Example

<!-- UC_START_EXAMPLE getEmbedPbxAuth -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.ConversationEmbedApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getEmbedPbxAuth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getEmbedPbxAuth -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConversationEmbedPbxAuthResponse**](ConversationEmbedPbxAuthResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

