# UltraCartRestApiV2.ItemOptionValue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalDimensionApplication** | **String** | Additional dimensions application | [optional] 
**additionalItems** | [**[ItemOptionValueAdditionalItem]**](ItemOptionValueAdditionalItem.md) | Additional items to add to the order if this value is selected | [optional] 
**costChange** | **Number** | Cost change | [optional] 
**defaultValue** | **Boolean** | True if default value | [optional] 
**digitalItems** | [**[ItemOptionValueDigitalItem]**](ItemOptionValueDigitalItem.md) | Digital items to allow the customer to download if this option value is selected | [optional] 
**height** | [**Distance**](Distance.md) |  | [optional] 
**length** | [**Distance**](Distance.md) |  | [optional] 
**merchantItemMultimediaOid** | **Integer** | Multimedia object identifier associated with this option value | [optional] 
**optionValueOid** | **Integer** | Option value object identifier | [optional] 
**percentCostChange** | **Number** | Percentage cost change | [optional] 
**translatedTextInstanceOid** | **Integer** | Translated text instance id | [optional] 
**value** | **String** | Value | [optional] 
**weightChange** | [**Weight**](Weight.md) |  | [optional] 
**weightChangePercent** | **Number** | Percentage weight change | [optional] 
**width** | [**Distance**](Distance.md) |  | [optional] 


<a name="AdditionalDimensionApplicationEnum"></a>
## Enum: AdditionalDimensionApplicationEnum


* `none` (value: `"none"`)

* `set item to` (value: `"set item to"`)

* `add item` (value: `"add item"`)




