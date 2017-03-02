# UltraCartRestApiV2.ItemOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costIfSpecified** | **Number** | Cost if specified | [optional] 
**costPerLetter** | **Number** | Cost per letter | [optional] 
**costPerLine** | **Number** | Cost per line | [optional] 
**ignoreIfDefault** | **Boolean** | Ignore this option on the order if the default value is selected | [optional] 
**label** | **String** | Label | [optional] 
**labelTranslatedTextInstanceOid** | **Integer** | Label translated text instance ID | [optional] 
**name** | **String** | Name | [optional] 
**nameTranslatedTextInstanceOid** | **Integer** | Name translated text instance ID | [optional] 
**oneTimeFee** | **Boolean** | One time fee | [optional] 
**optionOid** | **Integer** | Option object identifier | [optional] 
**required** | **Boolean** | True if the customer is required to specify an answer | [optional] 
**systemOption** | **Boolean** | True if this is a system option | [optional] 
**type** | **String** | Type of option | [optional] 
**values** | [**[ItemOptionValue]**](ItemOptionValue.md) | Values | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `dropdown` (value: `"dropdown"`)

* `file attachment` (value: `"file attachment"`)

* `fixed` (value: `"fixed"`)

* `hidden` (value: `"hidden"`)

* `multiline` (value: `"multiline"`)

* `radio` (value: `"radio"`)

* `single` (value: `"single"`)




