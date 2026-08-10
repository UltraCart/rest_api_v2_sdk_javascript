# UltraCartRestApiV2.OauthMeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **String** | The name of your application as the merchant approved it. | [optional] 
**client_id** | **String** | Your application&#39;s client_id.  Null when authenticating with a simple key, which is not tied to an application. | [optional] 
**merchant_id** | **String** | The UltraCart merchant account that authorized your application.  Stable, and the value to key your own records on. | [optional] 
**merchant_name** | **String** | The account&#39;s company name, suitable for displaying to your user.  The merchant can change this, so display it rather than storing it as an identifier. | [optional] 
**scopes** | **[String]** | The permissions the merchant granted.  May be narrower than the permissions your application currently requests. | [optional] 


