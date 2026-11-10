# UltraCartRestApiV2.SfvbItemVariationsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_needed** | **Boolean** | True when the change needs an approved item.variations request. | [optional] 
**axes** | [**[SfvbItemVariationAxis]**](SfvbItemVariationAxis.md) | The axes in order. | [optional] 
**changes** | [**[SfvbItemVariationChangeResult]**](SfvbItemVariationChangeResult.md) | What each change did, or would do on a dry run. | [optional] 
**combinations** | [**[SfvbItemVariationCombination]**](SfvbItemVariationCombination.md) | Every filled combination. | [optional] 
**description** | **String** | The parent item&#39;s description. | [optional] 
**dry_run** | **Boolean** | True when nothing was saved. | [optional] 
**hash_sha256** | **String** | Hash of the variations as returned. | [optional] 
**merchant_item_id** | **String** | The parent item&#39;s id. | [optional] 
**merchant_item_oid** | **Number** | The parent item&#39;s oid. | [optional] 
**unfilled_combinations** | **Number** | How many combinations of the options have no child. | [optional] 
**warnings** | **[String]** | Things worth knowing, such as combinations left unfilled. | [optional] 


