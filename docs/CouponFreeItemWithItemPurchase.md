# UltraCartRestApiV2.CouponFreeItemWithItemPurchase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_tags** | **[String]** | An optional list of item tags which will receive a discount of one of the required purchased items is purchased. | [optional] 
**items** | **[String]** | A list of free items which will receive a discount if one of the required purchase items is purchased. | [optional] 
**limit** | **Number** | The (optional) maximum quantity of discounted items. | [optional] 
**match_required_purchase_item_to_free_item** | **Boolean** | If true then the free item is matched 1:1 with the free item in the list. | [optional] 
**required_purchase_items** | **[String]** | Required items (at least one from the list) that must be purchased for coupon to be valid | [optional] 
**required_purchase_items_tags** | **[String]** | An optional list of item tags which are required to be purchased. | [optional] 


