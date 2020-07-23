# UltraCartRestApiV2.OrderItemOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_dimension_application** | **String** | How the additional dimensions are applied to the item. | [optional] 
**cost_change** | [**Currency**](Currency.md) |  | [optional] 
**file_attachment** | [**OrderItemOptionFileAttachment**](OrderItemOptionFileAttachment.md) |  | [optional] 
**height** | [**Distance**](Distance.md) |  | [optional] 
**hidden** | **Boolean** | True if this option is hidden from display on the order | [optional] 
**label** | **String** | Label | [optional] 
**length** | [**Distance**](Distance.md) |  | [optional] 
**one_time_fee** | **Boolean** | True if the cost associated with this option is a one time fee or multiplied by the quantity of the item | [optional] 
**value** | **String** | Value | [optional] 
**weight_change** | [**Weight**](Weight.md) |  | [optional] 
**width** | [**Distance**](Distance.md) |  | [optional] 


<a name="AdditionalDimensionApplicationEnum"></a>
## Enum: AdditionalDimensionApplicationEnum


* `none` (value: `"none"`)

* `set_item_to` (value: `"set item to"`)

* `add_item` (value: `"add item"`)




