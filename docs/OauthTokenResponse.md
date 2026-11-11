# UltraCartRestApiV2.OauthTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **String** | Access token to use in OAuth authenticated API call | [optional] 
**error** | **String** |  | [optional] 
**error_code** | **String** | With error access_denied, a machine readable reason.  sfvb.beta_access_required means the account isn&#39;t enabled for the StoreFront CLI beta, not that a person clicked Deny. | [optional] 
**error_description** | **String** |  | [optional] 
**error_uri** | **String** |  | [optional] 
**expires_in** | **String** | The number of seconds since issuance when the access token will expire and need to be refreshed using the refresh token | [optional] 
**merchant_id** | **String** | The UltraCart merchant account that authorized this token.  Use it to map the token to the merchant within your own system.  Also returned by GET /oauth/me along with the account name. | [optional] 
**object_id** | **String** | With error_code sfvb.beta_access_required, the merchant id that was refused. | [optional] 
**refresh_token** | **String** | The refresh token that should be used to fetch a new access token when the expiration occurs | [optional] 
**refresh_token_expires_in** | **String** | Seconds until the refresh token expires.  Returned only by applications that rotate refresh tokens, which return a new refresh token on every refresh. | [optional] 
**scope** | **String** | The scope of permissions associated with teh access token | [optional] 
**token_type** | **String** | Type of token | [optional] 



## Enum: TokenTypeEnum


* `bearer` (value: `"bearer"`)




