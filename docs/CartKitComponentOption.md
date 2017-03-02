# UltraCartRestApiV2.CartKitComponentOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costIfSpecified** | [**Currency**](Currency.md) |  | [optional] 
**costPerLetter** | [**Currency**](Currency.md) |  | [optional] 
**costPerLine** | [**Currency**](Currency.md) |  | [optional] 
**ignoreIfDefault** | **Boolean** | True if the default answer is ignored | [optional] 
**itemId** | **String** | Kit component item id | [optional] 
**itemOid** | **Integer** | Unique identifier for the kit component item | [optional] 
**label** | **String** | Display label for the option | [optional] 
**name** | **String** | Name of the option | [optional] 
**oneTimeFee** | **Boolean** | Charge the fee a single time instead of multiplying by the quantity | [optional] 
**optionOid** | **Integer** | Unique identifier for the option | [optional] 
**required** | **Boolean** | True if the customer is required to select a value | [optional] 
**selectedValue** | **String** | The value of the option specified by the customer | [optional] 
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




