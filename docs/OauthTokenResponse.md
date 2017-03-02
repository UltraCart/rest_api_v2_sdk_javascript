# UltraCartRestApiV2.OauthTokenResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **String** | Access token to use in OAuth authenticated API call | [optional] 
**error** | **String** |  | [optional] 
**errorDescription** | **String** |  | [optional] 
**errorUri** | **String** |  | [optional] 
**expiresIn** | **String** | The number of seconds since issuance when the access token will expire and need to be refreshed using the refresh token | [optional] 
**refreshToken** | **String** | The refresh token that should be used to fetch a new access token when the expiration occurs | [optional] 
**scope** | **String** | The scope of permissions associated with teh access token | [optional] 
**tokenType** | **String** | Type of token | [optional] 


<a name="TokenTypeEnum"></a>
## Enum: TokenTypeEnum


* `bearer` (value: `"bearer"`)




