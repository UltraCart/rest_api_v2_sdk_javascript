# UltraCartRestApiV2.OauthApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthAccessToken**](OauthApi.md#oauthAccessToken) | **POST** /oauth/token | Exchange authorization code for access token.
[**oauthRevoke**](OauthApi.md#oauthRevoke) | **POST** /oauth/revoke | Revoke this OAuth application.



## oauthAccessToken

> OauthTokenResponse oauthAccessToken(client_id, grant_type, opts)

Exchange authorization code for access token.

The final leg in the OAuth process which exchanges the specified access token for the access code needed to make API calls. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.OauthApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let client_id = "client_id_example"; // String | The OAuth application client_id.
let grant_type = "grant_type_example"; // String | Type of grant
let opts = {
  'code': "code_example", // String | Authorization code received back from the browser redirect
  'redirect_uri': "redirect_uri_example", // String | The URI that you redirect the browser to start the authorization process
  'refresh_token': "refresh_token_example" // String | The refresh token received during the original grant_type=authorization_code that can be used to return a new access token
};
apiInstance.oauthAccessToken(client_id, grant_type, opts, (error, data, response) => {
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
 **client_id** | **String**| The OAuth application client_id. | 
 **grant_type** | **String**| Type of grant | 
 **code** | **String**| Authorization code received back from the browser redirect | [optional] 
 **redirect_uri** | **String**| The URI that you redirect the browser to start the authorization process | [optional] 
 **refresh_token** | **String**| The refresh token received during the original grant_type&#x3D;authorization_code that can be used to return a new access token | [optional] 

### Return type

[**OauthTokenResponse**](OauthTokenResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## oauthRevoke

> OauthRevokeSuccessResponse oauthRevoke(client_id, token)

Revoke this OAuth application.

Revokes the OAuth application associated with the specified client_id and token. 

### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.OauthApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let client_id = "client_id_example"; // String | The OAuth application client_id.
let token = "token_example"; // String | The OAuth access token that is to be revoked..
apiInstance.oauthRevoke(client_id, token, (error, data, response) => {
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
 **client_id** | **String**| The OAuth application client_id. | 
 **token** | **String**| The OAuth access token that is to be revoked.. | 

### Return type

[**OauthRevokeSuccessResponse**](OauthRevokeSuccessResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

