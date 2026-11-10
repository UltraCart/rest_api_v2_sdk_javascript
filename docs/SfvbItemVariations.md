# UltraCartRestApiV2.SfvbItemVariations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**axes** | [**[SfvbItemVariationAxis]**](SfvbItemVariationAxis.md) | The axes in order.  Empty when the item has no variations. | [optional] 
**combinations** | [**[SfvbItemVariationCombination]**](SfvbItemVariationCombination.md) | Every filled combination.  A combination not listed has no child, and shoppers see it as unavailable. | [optional] 
**description** | **String** | The parent item&#39;s description. | [optional] 
**hash_sha256** | **String** | Hash of the variations.  Send it as If-Match on the update. | [optional] 
**merchant_item_id** | **String** | The parent item&#39;s id. | [optional] 
**merchant_item_oid** | **Number** | The parent item&#39;s oid. | [optional] 
**unfilled_combinations** | **Number** | How many combinations of the options have no child. | [optional] 


