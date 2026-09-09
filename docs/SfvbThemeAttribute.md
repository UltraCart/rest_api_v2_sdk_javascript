# UltraCartRestApiV2.SfvbThemeAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **String** | What the declaring template falls back to when this slot has no value. | [optional] 
**deprecated** | **Boolean** | True when the theme marks this slot as on its way out.  Prefer not to build on it. | [optional] 
**description** | **String** | What this slot is for, where the theme author documented it. | [optional] 
**font** | [**SfvbThemeFont**](SfvbThemeFont.md) |  | [optional] 
**name** | **String** | Slot name, for example Theme Color 01.  Returned in the casing the theme&#39;s templates declare, which may differ from the casing you wrote.  Compare case insensitively. | [optional] 
**type** | **String** | What kind of slot this is, taken from the template that declares it rather than guessed from the value.  orphan means nothing declares it. | [optional] 
**undeclared** | **Boolean** | True when no template in this theme references this name.  Writing such a name is allowed and is how the builder stores its own settings, but if you did not mean to create one this is a misspelling and the write changed nothing visible. | [optional] 
**unused** | **Boolean** | True when the slot is declared but nothing in the theme actually reads it, so setting it has no visible effect. | [optional] 
**value** | **String** | The applied value.  For a colour this is a hex or rgb string, for a boolean the text true or false, for a font the raw JSON document also given in the font field.  When the stored value is empty the current preset&#39;s default is filled in here. | [optional] 



## Enum: TypeEnum


* `string` (value: `"string"`)

* `color` (value: `"color"`)

* `rgba` (value: `"rgba"`)

* `boolean` (value: `"boolean"`)

* `integer` (value: `"integer"`)

* `html` (value: `"html"`)

* `orphan` (value: `"orphan"`)

* `multiline` (value: `"multiline"`)

* `reserved` (value: `"reserved"`)

* `itemset` (value: `"itemset"`)

* `slider` (value: `"slider"`)

* `simplelist` (value: `"simplelist"`)

* `definitionlist` (value: `"definitionlist"`)

* `pagecollection` (value: `"pagecollection"`)

* `font` (value: `"font"`)

* `videolist` (value: `"videolist"`)

* `mailinglist` (value: `"mailinglist"`)




