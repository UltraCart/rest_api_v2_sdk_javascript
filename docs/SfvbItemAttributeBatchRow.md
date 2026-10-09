# UltraCartRestApiV2.SfvbItemAttributeBatchRow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_sha256** | **String** | The current_sha256 the dry run answered for this row.  Required to apply; a row whose value changed since is skipped as stale. | [optional] 
**expected_value** | **String** | For a dry run, the value the caller believes the item holds now.  A different current value makes the row stale. | [optional] 
**merchant_item_id** | **String** | The item by its merchant item id, for a dry run.  Send this or merchant_item_oid, not both. | [optional] 
**merchant_item_oid** | **Number** | The item.  Required to apply; the dry run answers it for a row that named merchant_item_id. | [optional] 
**name** | **String** | The attribute name, matched without regard to case. | [optional] 
**type** | **String** | The attribute type, used only when no template on the item&#39;s pages declares the name. | [optional] 
**value** | **String** | The new value.  An empty string clears the attribute. | [optional] 


