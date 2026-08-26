# UltraCartRestApiV2.SfvbRenderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[SfvbErrorDetail]**](SfvbErrorDetail.md) | Why the render failed.  Always populated when success is false. | [optional] 
**html** | **String** | Rendered HTML. | [optional] 
**pending_translation_count** | **Number** | Number of strings still awaiting translation in the requested language. | [optional] 
**success** | **Boolean** | True when HTML was produced. | [optional] 
**truncated** | **Boolean** | True when the HTML was cut short. | [optional] 
**warnings** | [**[SfvbErrorDetail]**](SfvbErrorDetail.md) | Quality warnings about the rendered node. | [optional] 


