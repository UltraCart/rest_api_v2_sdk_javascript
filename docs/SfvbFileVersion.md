# UltraCartRestApiV2.SfvbFileVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | Comment recorded with the write. | [optional] 
**current** | **Boolean** | True for the version currently on disk. | [optional] 
**editedBy** | **String** | Login of whoever wrote this version. | [optional] 
**fsFileHistoryOid** | **Number** | History record oid. | [optional] 
**hashSha256** | **String** | SHA-256 of this version&#39;s content. | [optional] 
**lastModified** | **String** | When this version was written. | [optional] 
**revertable** | **Boolean** | True when this version can be reverted to. | [optional] 
**size** | **Number** | Size in bytes. | [optional] 
**version** | **Number** | Version number.  Pass to files/content or files/revert. | [optional] 


