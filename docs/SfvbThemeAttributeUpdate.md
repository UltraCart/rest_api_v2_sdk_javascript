# UltraCartRestApiV2.SfvbThemeAttributeUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**font** | [**SfvbThemeFont**](SfvbThemeFont.md) |  | [optional] 
**name** | **String** | Slot name.  Matched without regard to case against what the theme already has, so you do not have to reproduce the exact casing.  A name nothing matches creates a new slot. | [optional] 
**type** | **String** | Only consulted when creating a slot the theme does not already have.  For a slot that exists the declared type always wins, because the templates decide it and not the caller. | [optional] 
**value** | **String** | The value to store.  An empty string clears the slot, which makes it fall back to the theme&#39;s default rather than removing it.  Ignored for a font when the font field is supplied. | [optional] 



## Enum: TypeEnum


* `color` (value: `"color"`)

* `rgba` (value: `"rgba"`)

* `font` (value: `"font"`)

* `string` (value: `"string"`)

* `multiline` (value: `"multiline"`)

* `html` (value: `"html"`)

* `boolean` (value: `"boolean"`)

* `integer` (value: `"integer"`)




