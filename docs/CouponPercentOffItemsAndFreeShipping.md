# UltraCartRestApiV2.CouponPercentOffItemsAndFreeShipping

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_percent** | **Number** | The percentage of subtotal discount | [optional] 
**excluded_item_tags** | **[String]** | A list of item tags which cannot be discounted. | [optional] 
**excluded_items** | **[String]** | A list of items which cannot be discounted. | [optional] 
**item_tags** | **[String]** | An optional list of item tags which will receive a discount.  If blank, discount applies to all items except excluded items. | [optional] 
**items** | **[String]** | An optional list of items which will receive a discount.  If blank, discount applies to all items except excluded items. | [optional] 
**shipping_methods** | **[String]** | One or more shipping methods that may be used with this coupon.  If not specified or empty, methods that are marked as qualifies for free shipping will be the only free methods | [optional] 


