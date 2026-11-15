# UltraCartRestApiV2.SfvbPageListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_offset** | **Number** | The offset of the next window, omitted on the last one.  Only with detail&#x3D;true. | [optional] 
**pages** | [**[SfvbPageSummary]**](SfvbPageSummary.md) | Pages sorted by path, the root first.  Hidden pages are included. | [optional] 
**total** | **Number** | How many pages the whole list has.  Only with detail&#x3D;true. | [optional] 


