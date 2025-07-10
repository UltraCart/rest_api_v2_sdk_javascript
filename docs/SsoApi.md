# UltraCartRestApiV2.SsoApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSsoSessionUser**](SsoApi.md#getSsoSessionUser) | **GET** /sso/session/user | Get single sign on session user
[**ssoAuthorize**](SsoApi.md#ssoAuthorize) | **PUT** /sso/authorize | Authorize a single sign on session
[**ssoSessionRevoke**](SsoApi.md#ssoSessionRevoke) | **DELETE** /sso/session/revoke | Revoke single sign on session
[**ssoToken**](SsoApi.md#ssoToken) | **PUT** /sso/token | Exchange a single sign on code for a simple key token



## getSsoSessionUser

> User getSsoSessionUser()

Get single sign on session user

This is the equivalent of logging out of the single sign on session 


### Example

<!-- UC_START_EXAMPLE getSsoSessionUser -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SsoApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getSsoSessionUser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getSsoSessionUser -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ssoAuthorize

> SingleSignOnAuthorizeResponse ssoAuthorize(authorization_request)

Authorize a single sign on session

Starts the process of authorizing a single sign on session. 


### Example

<!-- UC_START_EXAMPLE ssoAuthorize -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SsoApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let authorization_request = new UltraCartRestApiV2.SingleSignOnAuthorizeRequest(); // SingleSignOnAuthorizeRequest | Authorization request
apiInstance.ssoAuthorize(authorization_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE ssoAuthorize -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_request** | [**SingleSignOnAuthorizeRequest**](SingleSignOnAuthorizeRequest.md)| Authorization request | 

### Return type

[**SingleSignOnAuthorizeResponse**](SingleSignOnAuthorizeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## ssoSessionRevoke

> ssoSessionRevoke()

Revoke single sign on session

This is the equivalent of logging out of the single sign on session 


### Example

<!-- UC_START_EXAMPLE ssoSessionRevoke -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SsoApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.ssoSessionRevoke((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE ssoSessionRevoke -->

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ssoToken

> SingleSignOnTokenResponse ssoToken(token_request)

Exchange a single sign on code for a simple key token

Called by your application after receiving the code back on the redirect URI to obtain a simple key token to make API calls with 


### Example

<!-- UC_START_EXAMPLE ssoToken -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.SsoApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let token_request = new UltraCartRestApiV2.SingleSignOnTokenRequest(); // SingleSignOnTokenRequest | Token request
apiInstance.ssoToken(token_request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE ssoToken -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_request** | [**SingleSignOnTokenRequest**](SingleSignOnTokenRequest.md)| Token request | 

### Return type

[**SingleSignOnTokenResponse**](SingleSignOnTokenResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

