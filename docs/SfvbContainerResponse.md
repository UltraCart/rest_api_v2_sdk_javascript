# UltraCartRestApiV2.SfvbContainerResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeTheme** | **Boolean** | True when this container lives in the theme currently serving live traffic.  Writing to it requires the sfvb_publish scope. | [optional] 
**cjson** | **String** | The container JSON.  Runtime state is stripped on the way out. | [optional] 
**containerId** | **String** | Container id as the compiler will derive it. | [optional] 
**containerName** | **String** | Container name. | [optional] 
**hashSha256** | **String** | SHA-256 of the cjson.  Send back as If-Match when writing. | [optional] 
**lastModified** | **String** | When the container was last modified, where the store records it. | [optional] 
**ownerObjectId** | **String** | Identifier of the owning object within its store. | [optional] 
**ownerType** | **String** | Where this container lives. | [optional] 
**path** | **String** | File path, for theme and page containers only. | [optional] 
**version** | **Number** | File version, for theme and page containers only. | [optional] 



## Enum: OwnerTypeEnum


* `theme` (value: `"theme"`)

* `page` (value: `"page"`)

* `item` (value: `"item"`)

* `upsell` (value: `"upsell"`)

* `email` (value: `"email"`)

* `postcard` (value: `"postcard"`)




