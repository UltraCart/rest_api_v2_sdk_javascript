# UltraCartRestApiV2.SfvbItemDefaultPageResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**already_default** | **Number** | Rows whose page is already the default. | [optional] 
**dry_run** | **Boolean** | True when nothing was saved. | [optional] 
**failed** | **Number** | Rows whose change didn&#39;t save (apply). | [optional] 
**item_count** | **Number** | Distinct items in the request. | [optional] 
**ready** | **Number** | Rows that would change (dry run). | [optional] 
**refused** | **Number** | Rows refused - not found, not assigned, hidden, another storefront or invalid. | [optional] 
**rows** | [**[SfvbItemDefaultPageResult]**](SfvbItemDefaultPageResult.md) | Every row, in request order. | [optional] 
**rows_sha256** | **String** | Hash of the ready rows.  Request item.default_page with exactly those rows, then apply them with this. | [optional] 
**stale** | **Number** | Rows that changed since they were read. | [optional] 
**updated** | **Number** | Rows changed (apply). | [optional] 


