# UltraCartRestApiV2.OauthApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthRevokePost**](OauthApi.md#oauthRevokePost) | **POST** /oauth/revoke | Revoke this OAuth application.
[**oauthTokenPost**](OauthApi.md#oauthTokenPost) | **POST** /oauth/token | Exchange authorization code for access token.


<a name="oauthRevokePost"></a>
# **oauthRevokePost**
> OauthRevokeSuccessResponse oauthRevokePost(clientId, token)

Revoke this OAuth application.

Revokes the OAuth application associated with the specified client_id and token. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure API key authorization: ultraCartBrowserApiKey
var ultraCartBrowserApiKey = defaultClient.authentications['ultraCartBrowserApiKey'];
ultraCartBrowserApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartBrowserApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.OauthApi();

var clientId = "clientId_example"; // String | The OAuth application client_id.

var token = "token_example"; // String | The OAuth access token that is to be revoked..


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.oauthRevokePost(clientId, token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The OAuth application client_id. | 
 **token** | **String**| The OAuth access token that is to be revoked.. | 

### Return type

[**OauthRevokeSuccessResponse**](OauthRevokeSuccessResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="oauthTokenPost"></a>
# **oauthTokenPost**
> OauthTokenResponse oauthTokenPost(clientId, grantType, opts)

Exchange authorization code for access token.

The final leg in the OAuth process which exchanges the specified access token for the access code needed to make API calls. 

### Example
```javascript
var UltraCartRestApiV2 = require('ultra_cart_rest_api_v2');
var defaultClient = UltraCartRestApiV2.ApiClient.default;

// Configure API key authorization: ultraCartBrowserApiKey
var ultraCartBrowserApiKey = defaultClient.authentications['ultraCartBrowserApiKey'];
ultraCartBrowserApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartBrowserApiKey.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: ultraCartOauth
var ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';

// Configure API key authorization: ultraCartSimpleApiKey
var ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

var apiInstance = new UltraCartRestApiV2.OauthApi();

var clientId = "clientId_example"; // String | The OAuth application client_id.

var grantType = "grantType_example"; // String | Type of grant

var opts = { 
  'code': "code_example", // String | Authorization code received back from the browser redirect
  'redirectUri': "redirectUri_example", // String | The URI that you redirect the browser to to start the authorization process
  'refreshToken': "refreshToken_example" // String | The refresh token received during the original grant_type=authorization_code that can be used to return a new access token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.oauthTokenPost(clientId, grantType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The OAuth application client_id. | 
 **grantType** | **String**| Type of grant | 
 **code** | **String**| Authorization code received back from the browser redirect | [optional] 
 **redirectUri** | **String**| The URI that you redirect the browser to to start the authorization process | [optional] 
 **refreshToken** | **String**| The refresh token received during the original grant_type&#x3D;authorization_code that can be used to return a new access token | [optional] 

### Return type

[**OauthTokenResponse**](OauthTokenResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

