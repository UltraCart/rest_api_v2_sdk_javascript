# UltraCartRestApiV2.SfvbFileVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Comment recorded with the write. | [optional] 
**current** | **Boolean** | True for the version currently on disk. | [optional] 
**edited_by** | **String** | Login of whoever wrote this version. | [optional] 
**fs_file_history_oid** | **Number** | History record oid, for correlating an entry with the file manager.  Absent on the entry marked current, which is the content on disk right now and has no history row of its own.  Unlike container_history_oid on a container version, this is NOT addressable through this API - nothing accepts it.  Fetch and revert a file version by path plus version instead. | [optional] 
**hash_sha256** | **String** | SHA-256 of this version&#39;s content. | [optional] 
**last_modified** | **String** | When this version was written. | [optional] 
**revertable** | **Boolean** | True when this version can be reverted to, which is every entry except the one marked current.  Note that it is absent rather than false on that entry - false booleans are omitted across this API, so a generated client sees undefined rather than false.  Test whether the key is present, or simpler still, use current. | [optional] 
**size** | **Number** | Size in bytes. | [optional] 
**version** | **Number** | Version number.  Pass to files/content or files/revert. | [optional] 


