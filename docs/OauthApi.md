# UltraCartRestApiV2.OauthApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthAccessToken**](OauthApi.md#oauthAccessToken) | **POST** /oauth/token | Exchange authorization code for access token.
[**oauthDeviceAuthorize**](OauthApi.md#oauthDeviceAuthorize) | **POST** /oauth/device/authorize | Initiate a device authorization flow.
[**oauthMe**](OauthApi.md#oauthMe) | **GET** /oauth/me | Identify the merchant account this access token belongs to.
[**oauthRevoke**](OauthApi.md#oauthRevoke) | **POST** /oauth/revoke | Revoke this OAuth application.



## oauthAccessToken

> OauthTokenResponse oauthAccessToken(client_id, grant_type, opts)

Exchange authorization code for access token.

The final leg in the OAuth process which exchanges the specified access token for the access code needed to make API calls. 


### Example

```javascript
// Import API and UltraCart types
import { oauthApi } from '../api.js';

// Namespace-like structure using a class
export class OauthAccessToken {
  /*
   * The first step in implementing an OAuth authorization to your UltraCart Developer Application is
   * creating a Client ID and Secret. See the following doc for instructions on doing so:
   * https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/3488907265/Developer+Applications+-+Creating+a+Client+ID+and+Secret+for+an+OAuth+Application
   *
   * The second step is to construct an authorize url for your customers to follow and authorize your application.
   * See the oauthAuthorize.php for an example on constructing that url.
   *
   * This method, OAuth.oauthAccessToken() will be called from within your redirect script, i.e. that web page the
   * customer is redirected to by UltraCart after successfully authorizing your application.
   *
   * This example illustrates how to retrieve the code parameter and exchange it for an access_token and refresh_token.
   *
   * Once you have your Client ID and Secret created, our OAuth security follows the industry standards.
   * 1. Construct an authorize url for your customers.
   * 2. Your customers will follow the link and authorize your application.
   * 3. Store their oauth credentials as best fits your application.
   *
   * Parameters this script should expect:
   * code -> used to exchange for an access token
   * state -> whatever you passed in your authorize url
   * error -> if you have a problem with your application configure. Possible values are:
   *     invalid_request -> your authorize url has expired
   *     access_denied -> user said 'no' and did not grant access.
   *
   * Parameters you will use to retrieve a token:
   * code -> the value provided as a query parameter from UltraCart, required if grant_type is 'authorization_code'
   * client_id -> your client id (see doc link at top of this file)
   * grant_type -> 'authorization_code' or 'refresh_token'
   * redirect_url -> The URI that you redirect the browser to start the authorization process
   * refresh_token -> if grant_type = 'refresh_token', you have to provide the refresh token. makes sense, yes?
   *
   * See OauthTokenResponse for fields that are returned from this call.
   * All SDKs have the same field names with slight differences in capitalization and underscores.
   * https://github.com/UltraCart/rest_api_v2_sdk_csharp/blob/master/src/com.ultracart.admin.v2/Model/OauthTokenResponse.cs
   */
  static async execute(queryParams) {
    const clientId = "5e31ce86e17f02015a35257c47151544"; // this is given to you when you create your application (see the doc link above)
    const grantType = "authorization_code";
    const redirectUri = "https://www.mywebsite.com/oauth/redirect_here.php";
    const state = "denmark"; // this is whatever you used when you created your authorize url (see oauthAuthorize.php)

    // Note: In a real application, you'd get 'code' from query parameters in your server or client context
    const code = queryParams.code ?? undefined; // Example: from URL query string in a redirect handler
    const refreshToken = undefined;

    try {
      if (!code && grantType === "authorization_code") {
        throw new Error("No code provided for authorization_code grant type");
      }

      // UltraCart API call with parameters as an anonymous object
      const apiResponse = await new Promise((resolve, reject) => {
        oauthApi.oauthAccessToken(
          clientId,
          grantType, {
          code: code,
          redirectUri: redirectUri,
          refreshToken: refreshToken,
        }, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      // apiResponse is an OauthTokenResponse object
      const newRefreshToken = apiResponse.refresh_token;
      const expiresIn = apiResponse.expires_in;

      console.log("OAuth Token Response:");
      console.log(`Refresh Token: ${newRefreshToken}`);
      console.log(`Expires In: ${expiresIn}`);
    } catch (ex) {
      console.log(`Error: ${ex.message}`);
      console.log(ex.stack);
    }
  }
}

// Example usage (for a Node.js server context, adjust as needed)
import { URL } from 'url'; // Node.js built-in module
const exampleQuery = new URL('https://example.com?code=abc123&state=denmark').searchParams;
OauthAccessToken.execute({
  code: exampleQuery.get('code') ?? undefined,
  state: exampleQuery.get('state') ?? undefined,
  error: exampleQuery.get('error') ?? undefined,
}).catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **String**| The OAuth application client_id. | 
 **grant_type** | **String**| Type of grant | 
 **code** | **String**| Authorization code received back from the browser redirect | [optional] 
 **redirect_uri** | **String**| The URI that you redirect the browser to start the authorization process | [optional] 
 **refresh_token** | **String**| The refresh token received during the original grant_type&#x3D;authorization_code that can be used to return a new access token | [optional] 
 **device_code** | **String**| The device code received from /oauth/device/authorize | [optional] 

### Return type

[**OauthTokenResponse**](OauthTokenResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## oauthDeviceAuthorize

> OauthDeviceAuthorizationResponse oauthDeviceAuthorize(client_id, scope)

Initiate a device authorization flow.

Initiates the device authorization flow by returning a device code and user code. The device displays the user code to the merchant, who visits the verification URI to approve the request. RFC 8628. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **String**| The OAuth application client_id. | 
 **scope** | **String**| The application-level scope (e.g., crm, ultraship). | 

### Return type

[**OauthDeviceAuthorizationResponse**](OauthDeviceAuthorizationResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## oauthMe

> oauthMe()

Identify the merchant account this access token belongs to.

Returns the UltraCart merchant account that authorized your application, along with the permissions that were granted.  Call it immediately after exchanging your authorization code so you can display the connected account to your user and map it within your own system.  Any OAuth access token may call this endpoint regardless of the permissions it holds.  The granted permissions are the ones the merchant approved, which may be narrower than the permissions your application currently requests, because permissions are recorded when the merchant authorizes and do not change afterwards.  If you add a permission to your application, already connected merchants keep the permissions they originally approved until they authorize again, so read this list rather than assuming your application&#39;s configured permissions. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## oauthRevoke

> OauthRevokeSuccessResponse oauthRevoke(client_id, token)

Revoke this OAuth application.

Revokes the OAuth application associated with the specified client_id and token. 


### Example

```javascript
// Import API and UltraCart types
import { oauthApi } from '../api.js';

// Namespace-like structure using a class
export class OauthRevoke {
  /*
   * This is a last feature of the UltraCart OAuth Security Implementation.
   * oauthRevoke is used to kill an access token.
   * Call this method when a customer desires to terminate using your Developer Application.
   *
   * The first step in implementing an OAuth authorization to your UltraCart Developer Application is
   * creating a Client ID and Secret. See the following doc for instructions on doing so:
   * https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/3488907265/Developer+Applications+-+Creating+a+Client+ID+and+Secret+for+an+OAuth+Application
   */
  static async execute() {
    const clientId = "5e31ce86e17f02015a35257c47151544"; // this is given to you when you create your application (see the doc link above)
    const token = "123456789012345678901234567890"; // this is stored by your application somewhere somehow.

    try {
      // UltraCart API call with parameters as an anonymous object
      const apiResponse = await new Promise((resolve, reject) => {
        oauthApi.oauthRevoke(clientId, token, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      // apiResponse is an OauthRevokeSuccessResponse object
      const successful = apiResponse.successful;
      const message = apiResponse.message;

      console.log("OAuth Revoke Response:");
      console.log(`Successful: ${successful}`);
      console.log(`Message: ${message}`);
    } catch (ex) {
      console.log(`Error: ${ex.message}`);
      console.log(ex.stack);
    }
  }
}

// Example usage (optional, remove if not needed)
OauthRevoke.execute().catch(console.error);
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

