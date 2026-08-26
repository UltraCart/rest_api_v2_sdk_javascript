# UltraCartRestApiV2.SfvbFileWriteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compiledPath** | **String** | Path of the compiled output, when writing a .cjson under a theme triggered a compile. | [optional] 
**file** | [**SfvbFileEntry**](SfvbFileEntry.md) |  | [optional] 
**hashSha256** | **String** | New SHA-256.  Use as the next If-Match value. | [optional] 
**validation** | [**SfvbValidationResponse**](SfvbValidationResponse.md) |  | [optional] 
**velocityErrors** | **String** | Velocity errors recorded by the store.  Present means the file was written but is not valid. | [optional] 
**version** | **Number** | New version number. | [optional] 


