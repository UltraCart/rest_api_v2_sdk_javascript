# UltraCartRestApiV2.CouponPercentOffItemsWithMinimumItemAmount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **String** | The ISO-4217 three letter currency code the customer is viewing prices in | [optional] 
**discount_percent** | **Number** | The percentage of subtotal discount | [optional] 
**excluded_item_tags** | **[String]** | A list of item tags which cannot be discounted. | [optional] 
**excluded_items** | **[String]** | A list of items which cannot be discounted. | [optional] 
**item_tags** | **[String]** | An optional list of item tags which will receive a discount.  If blank, discount applies to all items except excluded items. | [optional] 
**items** | **[String]** | An optional list of items which will receive a discount.  If blank, discount applies to all items except excluded items. | [optional] 
**limit** | **Number** | The (optional) maximum quantity of discounted items. | [optional] 
**minimum_item_amount** | **Number** | The minimum item amount (dollars) required for the discount to apply | [optional] 


