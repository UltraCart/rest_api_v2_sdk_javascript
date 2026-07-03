# UltraCartRestApiV2.OauthTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **String** | Access token to use in OAuth authenticated API call | [optional] 
**error** | **String** |  | [optional] 
**error_description** | **String** |  | [optional] 
**error_uri** | **String** |  | [optional] 
**expires_in** | **String** | The number of seconds since issuance when the access token will expire and need to be refreshed using the refresh token | [optional] 
**refresh_token** | **String** | The refresh token that should be used to fetch a new access token when the expiration occurs | [optional] 
**scope** | **String** | The scope of permissions associated with teh access token | [optional] 
**token_type** | **String** | Type of token | [optional] 



## Enum: TokenTypeEnum


* `bearer` (value: `"bearer"`)




