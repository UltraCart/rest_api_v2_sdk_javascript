# UltraCartRestApiV2.SfvbContainerResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | The container JSON.  Runtime state is stripped on the way out. | [optional] 
**container_name** | **String** | Container name. | [optional] 
**hash_sha256** | **String** | SHA-256 of the cjson.  Send back as If-Match when writing. | [optional] 
**last_modified** | **String** | When the container was last modified, in the store&#39;s own record of it.  Every owner type reports this.  It is absent only when the container has never been written since the store began recording it, so treat an absent value as unknown rather than as never modified.  Two behaviours worth knowing.  A postcard keeps one timestamp for both of its sides, so writing the front moves the value the back reports.  An upsell container that is rewritten with byte identical content keeps its original date rather than moving to now, because the timestamp tracks changes to the container and not writes to the offer. | [optional] 
**owner_object_id** | **String** | Identifier of the owning object within its store. | [optional] 
**owner_type** | **String** | Where this container lives. | [optional] 



## Enum: OwnerTypeEnum


* `theme` (value: `"theme"`)

* `page` (value: `"page"`)

* `item` (value: `"item"`)

* `upsell` (value: `"upsell"`)

* `email` (value: `"email"`)

* `postcard` (value: `"postcard"`)




