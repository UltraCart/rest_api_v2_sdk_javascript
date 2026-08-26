# UltraCartRestApiV2.SfvbValidationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[SfvbErrorDetail]**](SfvbErrorDetail.md) | Problems that will prevent a write. | [optional] 
**used_elements** | **[String]** | Element types found in the document, sorted. | [optional] 
**valid** | **Boolean** | True when there are no errors.  Warnings do not affect this flag. | [optional] 
**warnings** | [**[SfvbErrorDetail]**](SfvbErrorDetail.md) | Quality problems that will not prevent a write but should be addressed. | [optional] 


