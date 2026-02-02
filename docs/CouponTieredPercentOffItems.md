# UltraCartRestApiV2.CouponTieredPercentOffItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_tags** | **[String]** | An optional list of item tags which will receive a discount.  If blank, discount applies to all items except excluded items. | [optional] 
**items** | **[String]** | A list of items of which at least one must be purchased for coupon to be valid. | [optional] 
**limit** | **Number** | The (optional) maximum quantity of discounted items. | [optional] 
**tiers** | [**[CouponTierQuantityPercent]**](CouponTierQuantityPercent.md) | A list of discount tiers. | [optional] 


