# UltraCartRestApiV2.SfvbCompileResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_id** | **String** | Container id the document compiled under. | [optional] 
**directives** | **[String]** | Velocity directives the compiled output declares. | [optional] 
**success** | **Boolean** | True when compilation produced output. | [optional] 
**used_elements** | **[String]** | Element types used, sorted. | [optional] 
**validation** | [**SfvbValidationResponse**](SfvbValidationResponse.md) |  | [optional] 
**velocity** | **String** | The compiled Velocity.  This is the body only; the cache wrapper a stored .cjson gets is not included. | [optional] 


