# UltraCartRestApiV2.SfvbFileSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caseSensitive** | **Boolean** | Whether the text search is case sensitive.  Defaults to false. | [optional] 
**dynamicHtml** | **Boolean** | Only dynamic HTML (arbitrary) files. | [optional] 
**fileName** | **String** | Comma separated file name patterns, matched case insensitively with wildcards. | [optional] 
**i18nViolations** | **Boolean** | Only files with internationalization violations. | [optional] 
**invalid** | **Boolean** | Only files that failed Velocity validation. | [optional] 
**maxResults** | **Number** | Maximum results to return.  Clamped to the server maximum. | [optional] 
**mergeConflicts** | **Boolean** | Only files with unresolved theme merge conflicts. | [optional] 
**mimeType** | **String** | Restrict to a mime type. | [optional] 
**modifiedMax** | **String** | Only files modified at or before this ISO-8601 timestamp. | [optional] 
**modifiedMin** | **String** | Only files modified at or after this ISO-8601 timestamp. | [optional] 
**offset** | **Number** | Results to skip.  Send the next_offset from a truncated response to continue.  Ordering is by path with the file oid as a tie breaker, so pages do not overlap or skip entries between calls. | [optional] 
**path** | **String** | Restrict to a directory path.  Strongly recommended alongside text. | [optional] 
**sizeMax** | **Number** | Maximum size in bytes. | [optional] 
**sizeMin** | **Number** | Minimum size in bytes. | [optional] 
**subDirectories** | **Boolean** | Recurse below path.  Defaults to true. | [optional] 
**text** | **String** | Text to find inside files.  Only text/_* files are searched.  This is the expensive filter; narrow with path or file_name where possible. | [optional] 


