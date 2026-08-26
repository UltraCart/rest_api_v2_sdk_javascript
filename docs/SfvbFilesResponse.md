# UltraCartRestApiV2.SfvbFilesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**[SfvbFileEntry]**](SfvbFileEntry.md) | Directories first, then files, each sorted by name. | [optional] 
**fsDirectoryOid** | **Number** | Oid of the directory that was listed. | [optional] 
**omittedCount** | **Number** | Number of entries omitted when truncated is true. | [optional] 
**parentFsDirectoryOid** | **Number** | Oid of the parent directory, or zero at the root. | [optional] 
**path** | **String** | Path that was listed. | [optional] 
**truncated** | **Boolean** | True when the listing was capped.  Never truncated silently. | [optional] 


