# UltraCartRestApiV2.SfvbSiteAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Attribute name, as a template&#39;s site attribute declaration spells it.  Compare case insensitively.  This is the value siteAttributeName refers to and the name $site.attr takes. | [optional] 
**type** | **String** | What kind of attribute this is, taken from the template that declares it rather than from the stored row.  orphan means no template declares it.  reserved covers the settings the StoreFronts General screen owns. | [optional] 
**undeclared** | **Boolean** | True when no template declares this name and it is not a reserved setting.  A template can still read it with $site.attr, so this is not proof it is unused, but a name you did not mean to create is most likely a misspelling. | [optional] 
**used_by** | **String** | The other themes that declare this attribute, when the active theme does not. | [optional] 
**used_by_current_theme** | **Boolean** | True when a template in the active theme declares this attribute. | [optional] 
**value** | **String** | The stored value, or the template default when nothing has set it. | [optional] 
**writable** | **Boolean** | True when this API will change the value.  List, video list, mailing list and item set values are structured documents and must be edited in the store admin.  Of the reserved settings only the title, the SEO description and keywords and the social account names are writable here. | [optional] 



## Enum: TypeEnum


* `string` (value: `"string"`)

* `multiline` (value: `"multiline"`)

* `html` (value: `"html"`)

* `color` (value: `"color"`)

* `rgba` (value: `"rgba"`)

* `boolean` (value: `"boolean"`)

* `integer` (value: `"integer"`)

* `orphan` (value: `"orphan"`)

* `reserved` (value: `"reserved"`)

* `simplelist` (value: `"simplelist"`)

* `definitionlist` (value: `"definitionlist"`)

* `videolist` (value: `"videolist"`)

* `mailinglist` (value: `"mailinglist"`)

* `itemset` (value: `"itemset"`)




