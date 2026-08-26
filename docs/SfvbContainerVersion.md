# UltraCartRestApiV2.SfvbContainerVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | The CJSON this version held.  Populated only when reading a single version, and null when the operation is create.  Listings omit it because container CJSON is large. | [optional] 
**comment** | **String** | Comment recorded with the write that replaced this version. | [optional] 
**container_history_oid** | **Number** | History record oid.  Pass to the revert operation on the owning container. | [optional] 
**container_name** | **String** | Container name, where the owner has more than one container. | [optional] 
**created_dts** | **String** | When this snapshot was taken. | [optional] 
**current** | **Boolean** | True for the value currently stored. | [optional] 
**edited_by** | **String** | Login of whoever caused this snapshot. | [optional] 
**hash_sha256** | **String** | SHA-256 of this version&#39;s CJSON. | [optional] 
**operation** | **String** | What the container was before the write this entry precedes.  create means it did not exist, so reverting to this entry removes it again; update means it held the cjson recorded here. | [optional] 
**owner_object_id** | **String** | Owner object identifier. | [optional] 
**owner_type** | **String** | Owner type. | [optional] 
**size** | **Number** | Size of this version&#39;s CJSON in bytes. | [optional] 



## Enum: OperationEnum


* `create` (value: `"create"`)

* `update` (value: `"update"`)





## Enum: OwnerTypeEnum


* `item` (value: `"item"`)

* `upsell` (value: `"upsell"`)

* `email` (value: `"email"`)

* `postcardfront` (value: `"postcardfront"`)

* `postcardback` (value: `"postcardback"`)




