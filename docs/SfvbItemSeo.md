# UltraCartRestApiV2.SfvbItemSeo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | storefrontSEODescription as stored on this item.  Empty when it has never been set. | [optional] 
**description_source** | **String** | Where effective_description comes from. | [optional] 
**effective_description** | **String** | What the meta description renders as, after the item to page to site fallback. | [optional] 
**effective_keywords** | **String** | What the meta keywords render as, after the item to page to site fallback. | [optional] 
**effective_title** | **String** | What the document title renders as. | [optional] 
**keywords** | **String** | storefrontSEOKeywords as stored on this item.  Empty when it has never been set. | [optional] 
**keywords_source** | **String** | Where effective_keywords comes from. | [optional] 
**title** | **String** | storefrontSEOTitle as stored on this item.  Empty when it has never been set. | [optional] 
**title_source** | **String** | Where effective_title comes from.  item_description means nothing is set here and the item&#39;s own description is being used. | [optional] 



## Enum: DescriptionSourceEnum


* `item` (value: `"item"`)

* `group` (value: `"group"`)

* `site` (value: `"site"`)

* `none` (value: `"none"`)





## Enum: KeywordsSourceEnum


* `item` (value: `"item"`)

* `group` (value: `"group"`)

* `site` (value: `"site"`)

* `none` (value: `"none"`)





## Enum: TitleSourceEnum


* `item` (value: `"item"`)

* `item_description` (value: `"item_description"`)

* `none` (value: `"none"`)




