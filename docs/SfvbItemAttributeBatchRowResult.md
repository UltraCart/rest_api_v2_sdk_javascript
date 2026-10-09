# UltraCartRestApiV2.SfvbItemAttributeBatchRowResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_present** | **Boolean** | Whether the item had the attribute before this batch. | [optional] 
**current_sha256** | **String** | The hash of the value before this batch.  Send it back with the row to apply. | [optional] 
**current_value** | **String** | The value before this batch, for a backup.  Empty when the item has no such attribute. | [optional] 
**merchant_item_id** | **String** | The item&#39;s merchant item id.  Absent when not_found. | [optional] 
**merchant_item_oid** | **Number** | The item.  Absent when not_found. | [optional] 
**message** | **String** | Why a row is invalid, stale or error. | [optional] 
**name** | **String** | The attribute name as sent. | [optional] 
**result** | **String** | change or unchanged from a dry run, updated after an apply, stale (the value differs from expected_value or changed since the dry run), not_found, invalid, or error when the item could not be saved. | [optional] 
**row** | **Number** | The row&#39;s position in the request, from 1. | [optional] 
**type** | **String** | The type the value is checked and stored as - the declaring template&#39;s, else the one sent. | [optional] 



## Enum: ResultEnum


* `change` (value: `"change"`)

* `unchanged` (value: `"unchanged"`)

* `updated` (value: `"updated"`)

* `stale` (value: `"stale"`)

* `not_found` (value: `"not_found"`)

* `invalid` (value: `"invalid"`)

* `error` (value: `"error"`)




