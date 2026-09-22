# UltraCartRestApiV2.SfvbItemContainersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_containers** | [**[SfvbItemContainer]**](SfvbItemContainer.md) | The containers on this page, ordered by merchant item id then container name. | [optional] 
**max_results** | **Number** | The cap that was applied. | [optional] 
**next_offset** | **Number** | Offset to send for the next page.  Zero when truncated is false.  Never truncates without giving a way to continue. | [optional] 
**offset** | **Number** | Containers skipped to produce this page. | [optional] 
**result_count** | **Number** | Number of containers returned on this page. | [optional] 
**total_count** | **Number** | Total containers matching the filter.  With container_name supplied this is the answer to how many items carry that slot. | [optional] 
**truncated** | **Boolean** | True when containers exist beyond this page.  next_offset is populated when it is. | [optional] 
**truncation_advice** | **String** | Advice for the caller when truncated is true. | [optional] 


