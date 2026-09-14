# UltraCartRestApiV2.SfvbPageAttributeUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Attribute name.  Matched without regard to case against what the page already has, so you do not have to reproduce the exact casing.  A name nothing matches creates a new attribute. | [optional] 
**type** | **String** | Only consulted when creating an attribute no template declares.  For a declared attribute the template&#39;s type always wins, because the templates decide it and not the caller. | [optional] 
**value** | **String** | The value to store.  An empty string clears it.  For html the markup is stored as given and rendered as given.  For boolean send the text true or false. | [optional] 



## Enum: TypeEnum


* `string` (value: `"string"`)

* `multiline` (value: `"multiline"`)

* `html` (value: `"html"`)

* `boolean` (value: `"boolean"`)

* `integer` (value: `"integer"`)

* `color` (value: `"color"`)

* `rgba` (value: `"rgba"`)




