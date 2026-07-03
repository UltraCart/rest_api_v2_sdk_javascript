# UltraCartRestApiV2.CouponTieredAmountOffItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_tags** | **[String]** | An optional list of item tags which will receive a discount.  If blank, discount applies to all items except excluded items. | [optional] 
**items** | **[String]** | The items being discounted by this coupon. | [optional] 
**limit** | **Number** | The maximum number of discounted items. | [optional] 
**tiers** | [**[CouponTierQuantityAmount]**](CouponTierQuantityAmount.md) | A list of discount tiers. | [optional] 


