# UltraCartRestApiV2.SfvbCommsProviderImportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dry_run** | **Boolean** | True when nothing was imported. | [optional] 
**lists** | [**[SfvbCommsProviderList]**](SfvbCommsProviderList.md) | The lists imported, each into a new list of the same name. | [optional] 
**notes** | **[String]** | What the import does. | [optional] 
**provider** | **String** | The provider. | [optional] 
**queued** | **Boolean** | True when the import was started.  It runs in the background and emails the signed-in user when done. | [optional] 


