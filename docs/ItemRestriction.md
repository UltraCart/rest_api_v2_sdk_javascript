# UltraCartRestApiV2.ItemRestriction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_coupon** | **Boolean** | Exclude coupons | [optional] 
**exclude_from_free_promotion** | **Boolean** | Exclude from free promotion | [optional] 
**exclude_from_loyalty** | **Boolean** | Exclude from loyalty.  Must be set to true or false to save.  Null is ignored for backwards SDK compatibility | [optional] 
**items** | [**[ItemRestrictionItem]**](ItemRestrictionItem.md) | Items | [optional] 
**maximum_quantity** | **Number** | Maximum quantity | [optional] 
**minimum_quantity** | **Number** | Minimum quantity (defaults to 1) | [optional] 
**multiple_quantity** | **Number** | Multiple of quantity | [optional] 
**one_per_customer** | **Boolean** | One per customer | [optional] 
**purchase_separately** | **Boolean** | Purchase separately | [optional] 


