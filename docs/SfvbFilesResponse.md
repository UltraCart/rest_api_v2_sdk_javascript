# UltraCartRestApiV2.SfvbFilesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**[SfvbFileEntry]**](SfvbFileEntry.md) | Directories first, then files, each sorted by name. | [optional] 
**fs_directory_oid** | **Number** | Oid of the directory that was listed. | [optional] 
**omitted_count** | **Number** | Number of entries omitted when truncated is true. | [optional] 
**parent_fs_directory_oid** | **Number** | Oid of the parent directory, or zero at the root. | [optional] 
**path** | **String** | Path that was listed. | [optional] 
**truncated** | **Boolean** | True when the listing was capped.  Never truncated silently. | [optional] 


