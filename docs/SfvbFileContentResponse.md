# UltraCartRestApiV2.SfvbFileContentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoCompiled** | **Boolean** | True when this file is compiler output and must not be edited directly. | [optional] 
**content** | **String** | UTF-8 content.  Only text/_* files can be read this way. | [optional] 
**fsFileOid** | **Number** | StoreFront file system file oid. | [optional] 
**hashSha256** | **String** | SHA-256 of the content.  Also returned as the ETag header; send it back as If-Match when writing. | [optional] 
**mimeType** | **String** | Mime type. | [optional] 
**path** | **String** | Full path of the file. | [optional] 
**size** | **Number** | Size in bytes. | [optional] 
**truncated** | **Boolean** | True when the content was cut short.  Never truncated silently. | [optional] 
**valid** | **Boolean** | False when the file failed Velocity validation on its last write. | [optional] 
**velocityErrors** | **String** | Velocity errors recorded on the last write.  Null when valid. | [optional] 
**version** | **Number** | Version number of the content returned. | [optional] 


