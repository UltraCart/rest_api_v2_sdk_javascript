# UltraCartRestApiV2.SfvbItemAttributeBatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied** | **Boolean** | True after an apply. | [optional] 
**change** | **Number** | Rows that would change, from a dry run. | [optional] 
**error** | **Number** | Rows on an item that could not be saved, after an apply. | [optional] 
**invalid** | **Number** | Rows refused by the attribute checks. | [optional] 
**item_count** | **Number** | Distinct items with at least one row that would change, or did. | [optional] 
**not_found** | **Number** | Rows naming an item that does not exist. | [optional] 
**plan_hash** | **String** | The hash of the rows answered as change, with their current_sha256.  Apply exactly those rows with this hash. | [optional] 
**rows** | [**[SfvbItemAttributeBatchRowResult]**](SfvbItemAttributeBatchRowResult.md) | One result per row, in request order. | [optional] 
**stale** | **Number** | Rows skipped because the value is not the one expected. | [optional] 
**total** | **Number** | Rows checked. | [optional] 
**unchanged** | **Number** | Rows whose value is already the new one. | [optional] 
**updated** | **Number** | Rows written, after an apply. | [optional] 


