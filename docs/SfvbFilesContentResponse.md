# UltraCartRestApiV2.SfvbFilesContentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**[SfvbFileContentResult]**](SfvbFileContentResult.md) | One entry per path read, in the order asked. | [optional] 
**remaining_paths** | **[String]** | Paths not read because the response reached its size limit, in the order asked.  Send them again to read them.  Omitted when every path was read. | [optional] 


