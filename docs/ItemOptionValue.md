# UltraCartRestApiV2.ItemOptionValue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_dimension_application** | **String** | Additional dimensions application | [optional] 
**additional_items** | [**[ItemOptionValueAdditionalItem]**](ItemOptionValueAdditionalItem.md) | Additional items to add to the order if this value is selected | [optional] 
**cost_change** | **Number** | Cost change | [optional] 
**default_value** | **Boolean** | True if default value | [optional] 
**digital_items** | [**[ItemOptionValueDigitalItem]**](ItemOptionValueDigitalItem.md) | Digital items to allow the customer to download if this option value is selected | [optional] 
**height** | [**Distance**](Distance.md) |  | [optional] 
**length** | [**Distance**](Distance.md) |  | [optional] 
**merchant_item_multimedia_oid** | **Number** | Multimedia object identifier associated with this option value | [optional] 
**option_value_oid** | **Number** | Option value object identifier | [optional] 
**percent_cost_change** | **Number** | Percentage cost change | [optional] 
**translated_text_instance_oid** | **Number** | Translated text instance id | [optional] 
**value** | **String** | Value | [optional] 
**weight_change** | [**Weight**](Weight.md) |  | [optional] 
**weight_change_percent** | **Number** | Percentage weight change | [optional] 
**width** | [**Distance**](Distance.md) |  | [optional] 


<a name="AdditionalDimensionApplicationEnum"></a>
## Enum: AdditionalDimensionApplicationEnum


* `none` (value: `"none"`)

* `setItemTo` (value: `"set item to"`)

* `addItem` (value: `"add item"`)




