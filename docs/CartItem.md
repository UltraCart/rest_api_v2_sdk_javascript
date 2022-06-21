# UltraCartRestApiV2.CartItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arbitrary_unit_cost** | [**Currency**](Currency.md) |  | [optional] 
**attributes** | [**[CartItemAttribute]**](CartItemAttribute.md) | Attributes | [optional] 
**auto_order_schedule** | **String** | Auto order schedule the customer selected | [optional] 
**default_image_url** | **String** | URL to the default multimedia image | [optional] 
**default_thumbnail_url** | **String** | URL to the default multimedia thumbnail | [optional] 
**description** | **String** | Description of the item | [optional] 
**discount** | [**Currency**](Currency.md) |  | [optional] 
**extended_description** | **String** | Extended description of the item | [optional] 
**item_id** | **String** | Item ID | [optional] 
**item_oid** | **Number** | Item object identifier | [optional] 
**kit** | **Boolean** | True if this item is a kit | [optional] 
**kit_component_options** | [**[CartKitComponentOption]**](CartKitComponentOption.md) | Options associated with the kit components | [optional] 
**manufacturer_suggested_retail_price** | [**Currency**](Currency.md) |  | [optional] 
**maximum_quantity** | **Number** | Maximum quantity the customer can purchase | [optional] 
**minimum_quantity** | **Number** | Minimum quantity the customer can purchase | [optional] 
**multimedia** | [**[CartItemMultimedia]**](CartItemMultimedia.md) | Multimedia | [optional] 
**options** | [**[CartItemOption]**](CartItemOption.md) | Options | [optional] 
**phsyical** | [**CartItemPhysical**](CartItemPhysical.md) |  | [optional] 
**position** | **Number** | Position of the item in the cart | [optional] 
**preorder** | **Boolean** | True if this item is on pre-order | [optional] 
**quantity** | **Number** | quantity | [optional] 
**schedules** | **[String]** | Customer selectable auto order schedules | [optional] 
**total_cost** | [**Currency**](Currency.md) |  | [optional] 
**total_cost_with_discount** | [**Currency**](Currency.md) |  | [optional] 
**unit_cost** | [**Currency**](Currency.md) |  | [optional] 
**unit_cost_with_discount** | [**Currency**](Currency.md) |  | [optional] 
**upsell** | **Boolean** | True if this item was added to the cart as part of an upsell | [optional] 
**variations** | [**[CartItemVariationSelection]**](CartItemVariationSelection.md) | Variations | [optional] 
**view_url** | **String** | URL to view the product on the site | [optional] 


