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
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure API key authorization: ultraCartBrowserApiKey
let ultraCartBrowserApiKey = defaultClient.authentications['ultraCartBrowserApiKey'];
ultraCartBrowserApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartBrowserApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.OauthApi();
let client_id = "client_id_example"; // String | The OAuth application client_id.
let grant_type = "grant_type_example"; // String | Type of grant
let opts = {
  'code': "code_example", // String | Authorization code received back from the browser redirect
  'redirect_uri': "redirect_uri_example", // String | The URI that you redirect the browser to to start the authorization process
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
 **redirect_uri** | **String**| The URI that you redirect the browser to to start the authorization process | [optional] 
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
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure API key authorization: ultraCartBrowserApiKey
let ultraCartBrowserApiKey = defaultClient.authentications['ultraCartBrowserApiKey'];
ultraCartBrowserApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartBrowserApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.OauthApi();
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

