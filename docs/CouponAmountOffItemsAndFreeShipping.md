# UltraCartRestApiV2.CouponAmountOffItemsAndFreeShipping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **String** | The ISO-4217 three letter currency code the customer is viewing prices in | [optional] 
**discount_amount** | **Number** | The amount of discount | [optional] 
**item_tags** | **[String]** | An optional list of item tags which will receive a discount. | [optional] 
**items** | **[String]** | A list of items which are eligible for the discount amount. | [optional] 
**limit** | **Number** | The limit of items which are eligible for the discount amount. | [optional] 
**shipping_methods** | **[String]** | One or more shipping methods that may be used with this coupon.  If not specified or empty, methods that are marked as qualifies for free shipping will be the only free methods | [optional] 


