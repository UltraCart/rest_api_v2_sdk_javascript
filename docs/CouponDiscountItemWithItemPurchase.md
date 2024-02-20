# UltraCartRestApiV2.CouponDiscountItemWithItemPurchase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **String** | The ISO-4217 three letter currency code the customer is viewing prices in | [optional] 
**discount_item** | **String** | The item that will be sold at the discount_price when required_purchase_item is purchased. | [optional] 
**discount_item_tags** | **[String]** | An optional list of item tags which will receive a discount of one of the required purchased items is purchased. | [optional] 
**discount_price** | **Number** | The price (unit cost) of the discounted item | [optional] 
**limit** | **Number** | The (optional) maximum quantity of discounted items. | [optional] 
**required_purchase_item** | **String** | The item that must be purchased for the discount to be applied to the discount item. | [optional] 
**required_purchase_items_tags** | **[String]** | An optional list of item tags which are required to be purchased. | [optional] 


