# UltraCartRestApiV2.SfvbContainerVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | The CJSON this version held.  Populated only when reading a single version, and null when the operation is create.  Listings omit it because container CJSON is large. | [optional] 
**comment** | **String** | Comment recorded with the write that replaced this version. | [optional] 
**container_history_oid** | **Number** | History record oid.  Pass to the revert operation on the owning container.  Absent on the entry marked current, which holds the value stored right now, has no history row of its own, and so cannot be fetched or reverted to. | [optional] 
**container_name** | **String** | Container name, where the owner has more than one container. | [optional] 
**content_created_dts** | **String** | When this version&#39;s content was written, ISO 8601 UTC.  Same source and limits as content_edited_by. | [optional] 
**content_edited_by** | **String** | Login of whoever wrote this version&#39;s content, taken from the write recorded on the next older entry.  Absent on a create entry and on the oldest entry kept, such as a template body that was in place before any history.  Saves made outside this API, in the admin visual builder, are not recorded, so after one this names the previous API write. | [optional] 
**created_dts** | **String** | When the write that replaced this version happened, ISO 8601 UTC.  On the current entry, when it was written. | [optional] 
**current** | **Boolean** | True for the value currently stored. | [optional] 
**edited_by** | **String** | Login of whoever made the write that replaced this version.  On the current entry, whoever wrote it.  See content_edited_by for who wrote a history entry&#39;s content. | [optional] 
**hash_sha256** | **String** | SHA-256 of this version&#39;s CJSON. | [optional] 
**operation** | **String** | What the container was before the write this entry precedes.  create means it did not exist, so reverting to this entry removes it again; update means it held the cjson recorded here; delete means it held the cjson recorded here and the write after it removed the container, so reverting to this entry puts that cjson back. | [optional] 
**owner_object_id** | **String** | Owner object identifier. | [optional] 
**owner_type** | **String** | Owner type. | [optional] 
**size** | **Number** | Size of this version&#39;s CJSON in bytes. | [optional] 



## Enum: OperationEnum


* `create` (value: `"create"`)

* `update` (value: `"update"`)

* `delete` (value: `"delete"`)





## Enum: OwnerTypeEnum


* `item` (value: `"item"`)

* `upsell` (value: `"upsell"`)

* `email` (value: `"email"`)

* `postcardfront` (value: `"postcardfront"`)

* `postcardback` (value: `"postcardback"`)




