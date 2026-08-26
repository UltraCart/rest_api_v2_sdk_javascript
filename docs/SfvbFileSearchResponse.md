# UltraCartRestApiV2.SfvbFileSearchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**[SfvbFileEntry]**](SfvbFileEntry.md) | Matching files. | [optional] 
**maxResults** | **Number** | The cap that was applied. | [optional] 
**nextOffset** | **Number** | Offset to send for the next page.  Zero when truncated is false.  Never truncates without giving a way to continue. | [optional] 
**offset** | **Number** | Results skipped to produce this page. | [optional] 
**resultCount** | **Number** | Number of results returned. | [optional] 
**totalCount** | **Number** | Total matches found.  Available because the underlying query is unbounded and returns everything anyway; it is not evidence that fetching them all is cheap. | [optional] 
**truncated** | **Boolean** | True when matches exist beyond this page.  next_offset is populated when it is. | [optional] 
**truncationAdvice** | **String** | Advice for the caller when truncated is true. | [optional] 


