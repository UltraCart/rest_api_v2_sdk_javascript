# UltraCartRestApiV2.SfvbFileVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Comment recorded with the write. | [optional] 
**current** | **Boolean** | True for the version currently on disk. | [optional] 
**edited_by** | **String** | Login of whoever wrote this version. | [optional] 
**fs_file_history_oid** | **Number** | History record oid. | [optional] 
**hash_sha256** | **String** | SHA-256 of this version&#39;s content. | [optional] 
**last_modified** | **String** | When this version was written. | [optional] 
**revertable** | **Boolean** | True when this version can be reverted to. | [optional] 
**size** | **Number** | Size in bytes. | [optional] 
**version** | **Number** | Version number.  Pass to files/content or files/revert. | [optional] 


