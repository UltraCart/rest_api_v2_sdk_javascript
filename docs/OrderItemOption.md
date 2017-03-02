# UltraCartRestApiV2.OrderItemOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalDimensionApplication** | **String** | How the additional dimensions are applied to the item. | [optional] 
**costChange** | [**Currency**](Currency.md) |  | [optional] 
**fileAttachment** | [**OrderItemOptionFileAttachment**](OrderItemOptionFileAttachment.md) |  | [optional] 
**height** | [**Distance**](Distance.md) |  | [optional] 
**hidden** | **Boolean** | True if this option is hidden from display on the order | [optional] 
**label** | **String** | Label | [optional] 
**length** | [**Distance**](Distance.md) |  | [optional] 
**oneTimeFee** | **Boolean** | True if the cost associated with this option is a one time fee or multiplied by the quantity of the item | [optional] 
**value** | **String** | Value | [optional] 
**weightChange** | [**Weight**](Weight.md) |  | [optional] 
**width** | [**Distance**](Distance.md) |  | [optional] 


<a name="AdditionalDimensionApplicationEnum"></a>
## Enum: AdditionalDimensionApplicationEnum


* `none` (value: `"none"`)

* `set item to` (value: `"set item to"`)

* `add item` (value: `"add item"`)




