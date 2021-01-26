# UltraCartRestApiV2.ItemOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_if_specified** | **Number** | Cost if specified | [optional] 
**cost_per_letter** | **Number** | Cost per letter | [optional] 
**cost_per_line** | **Number** | Cost per line | [optional] 
**ignore_if_default** | **Boolean** | Ignore this option on the order if the default value is selected | [optional] 
**label** | **String** | Label | [optional] 
**label_translated_text_instance_oid** | **Number** | Label translated text instance ID | [optional] 
**name** | **String** | Name | [optional] 
**name_translated_text_instance_oid** | **Number** | Name translated text instance ID | [optional] 
**one_time_fee** | **Boolean** | One time fee | [optional] 
**option_oid** | **Number** | Option object identifier | [optional] 
**required** | **Boolean** | True if the customer is required to specify an answer | [optional] 
**system_option** | **Boolean** | True if this is a system option | [optional] 
**type** | **String** | Type of option | [optional] 
**values** | [**[ItemOptionValue]**](ItemOptionValue.md) | Values | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `dropdown` (value: `"dropdown"`)

* `file_attachment` (value: `"file attachment"`)

* `fixed` (value: `"fixed"`)

* `hidden` (value: `"hidden"`)

* `multiline` (value: `"multiline"`)

* `radio` (value: `"radio"`)

* `single` (value: `"single"`)




