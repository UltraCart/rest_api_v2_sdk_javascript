# UltraCartRestApiV2.SfvbItemRelatedItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_item_id** | **String** | The related item.  On a write, send this or merchant_item_oid. | [optional] 
**merchant_item_oid** | **Number** | The related item&#39;s oid. | [optional] 
**type** | **String** | user (the default on a write), addon or complementary.  system marks one UltraCart calculated and other a kind this API does not change.  Both are read only and kept by a write. | [optional] 



## Enum: TypeEnum


* `user` (value: `"user"`)

* `addon` (value: `"addon"`)

* `complementary` (value: `"complementary"`)

* `system` (value: `"system"`)

* `other` (value: `"other"`)




