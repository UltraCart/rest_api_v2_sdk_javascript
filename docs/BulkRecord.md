# UltraCartRestApiV2.BulkRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | On an upsert success, whether the record was inserted or updated | [optional] 
**error_code** | **String** | Error code on a failed record | [optional] 
**error_message** | **String** | Human-readable detail on a failed record | [optional] 
**line_number** | **Number** | Original NDJSON line number | [optional] 
**merchant_record_id** | **String** | The merchant-supplied dedupe key for this record | [optional] 
**status** | **String** | Per-record verdict | [optional] 
**uc_id** | **String** | UltraCart-side id created on success or matched on duplicate | [optional] 



## Enum: ActionEnum


* `inserted` (value: `"inserted"`)

* `updated` (value: `"updated"`)





## Enum: StatusEnum


* `success` (value: `"success"`)

* `failed` (value: `"failed"`)

* `duplicate` (value: `"duplicate"`)




