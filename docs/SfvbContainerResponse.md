# UltraCartRestApiV2.SfvbContainerResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_theme** | **Boolean** | True when this container lives in the theme currently serving live traffic.  Writing to it requires the sfvb_publish scope. | [optional] 
**cjson** | **String** | The container JSON.  Runtime state is stripped on the way out. | [optional] 
**container_id** | **String** | Container id as the compiler will derive it. | [optional] 
**container_name** | **String** | Container name. | [optional] 
**hash_sha256** | **String** | SHA-256 of the cjson.  Send back as If-Match when writing. | [optional] 
**last_modified** | **String** | When the container was last modified, where the store records it. | [optional] 
**owner_object_id** | **String** | Identifier of the owning object within its store. | [optional] 
**owner_type** | **String** | Where this container lives. | [optional] 
**path** | **String** | File path, for theme and page containers only. | [optional] 
**version** | **Number** | File version, for theme and page containers only. | [optional] 



## Enum: OwnerTypeEnum


* `theme` (value: `"theme"`)

* `page` (value: `"page"`)

* `item` (value: `"item"`)

* `upsell` (value: `"upsell"`)

* `email` (value: `"email"`)

* `postcard` (value: `"postcard"`)




