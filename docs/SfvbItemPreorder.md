# UltraCartRestApiV2.SfvbItemPreorder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed** | [**SfvbItemPreorderChange**](SfvbItemPreorderChange.md) |  | [optional] 
**eta** | **String** | The expected date, YYYY-MM-DD, or null when none is set. | [optional] 
**hash_sha256** | **String** | The hash of preorder and eta.  Send it as If-Match, or as the row&#39;s hash_sha256, to change them. | [optional] 
**merchant_item_id** | **String** | The item&#39;s merchant item id. | [optional] 
**merchant_item_oid** | **Number** | The item. | [optional] 
**preorder** | **Boolean** | True when the item is on pre-order.  Shoppers can order it while out of stock, and its orders go to the Pre-ordered stage. | [optional] 
**shoppers_see** | **String** | What itempreorder shows.  preorder_with_eta when on pre-order with an ETA of today or later, preorder_no_eta when on pre-order with no ETA or a past one, nothing when not on pre-order. | [optional] 
**shoppers_see_text** | **String** | shoppers_see in words, such as on pre-order, ETA 2026-11-20. | [optional] 
**variation_values** | [**[SfvbItemPreorderOption]**](SfvbItemPreorderOption.md) | For a variation listed under its parent, the option values that pick it, such as Size 2T. | [optional] 
**warnings** | **[String]** | After a change, things worth knowing about the new values, such as an ETA in the past.  Never a refusal. | [optional] 



## Enum: ShoppersSeeEnum


* `preorder_with_eta` (value: `"preorder_with_eta"`)

* `preorder_no_eta` (value: `"preorder_no_eta"`)

* `nothing` (value: `"nothing"`)




