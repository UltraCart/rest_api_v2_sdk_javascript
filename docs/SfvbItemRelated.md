# UltraCartRestApiV2.SfvbItemRelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash_sha256** | **String** | The hash of the above.  Send it as If-Match to change them. | [optional] 
**merchant_item_id** | **String** | The item&#39;s merchant item id. | [optional] 
**merchant_item_oid** | **Number** | The item. | [optional] 
**no_system_calculated_related_items** | **Boolean** | True when UltraCart does not calculate related items for this item. | [optional] 
**not_relatable** | **Boolean** | True when this item is never shown as related to another. | [optional] 
**related_items** | [**[SfvbItemRelatedItem]**](SfvbItemRelatedItem.md) | In stored order - the merchant&#39;s own (user, addon, complementary) and UltraCart&#39;s calculated ones (system). | [optional] 


