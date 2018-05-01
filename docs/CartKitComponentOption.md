# UltraCartRestApiV2.CartKitComponentOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_if_specified** | [**Currency**](Currency.md) |  | [optional] 
**cost_per_letter** | [**Currency**](Currency.md) |  | [optional] 
**cost_per_line** | [**Currency**](Currency.md) |  | [optional] 
**ignore_if_default** | **Boolean** | True if the default answer is ignored | [optional] 
**item_id** | **String** | Kit component item id | [optional] 
**item_oid** | **Number** | Unique identifier for the kit component item | [optional] 
**label** | **String** | Display label for the option | [optional] 
**name** | **String** | Name of the option | [optional] 
**one_time_fee** | **Boolean** | Charge the fee a single time instead of multiplying by the quantity | [optional] 
**option_oid** | **Number** | Unique identifier for the option | [optional] 
**required** | **Boolean** | True if the customer is required to select a value | [optional] 
**selected_value** | **String** | The value of the option specified by the customer | [optional] 
**type** | **String** | Type of option | [optional] 
**values** | [**[CartItemOptionValue]**](CartItemOptionValue.md) | Values that the customer can select from for radio or select type options | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `single` (value: `"single"`)

* `multiline` (value: `"multiline"`)

* `dropdown` (value: `"dropdown"`)

* `hidden` (value: `"hidden"`)

* `radio` (value: `"radio"`)

* `fixed` (value: `"fixed"`)




