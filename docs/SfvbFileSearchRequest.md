# UltraCartRestApiV2.SfvbFileSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **Boolean** | Whether the text search is case sensitive.  Defaults to false. | [optional] 
**dynamic_html** | **Boolean** | Only dynamic HTML (arbitrary) files. | [optional] 
**file_name** | **String** | Comma separated file name patterns, matched case insensitively with wildcards. | [optional] 
**i18n_violations** | **Boolean** | Only files with internationalization violations. | [optional] 
**invalid** | **Boolean** | Only files that failed Velocity validation. | [optional] 
**max_results** | **Number** | Maximum results to return.  Clamped to the server maximum. | [optional] 
**merge_conflicts** | **Boolean** | Only files with unresolved theme merge conflicts. | [optional] 
**mime_type** | **String** | Restrict to a mime type. | [optional] 
**modified_max** | **String** | Only files modified at or before this ISO-8601 timestamp. | [optional] 
**modified_min** | **String** | Only files modified at or after this ISO-8601 timestamp. | [optional] 
**offset** | **Number** | Results to skip.  Send the next_offset from a truncated response to continue.  Ordering is by path with the file oid as a tie breaker, so pages do not overlap or skip entries between calls. | [optional] 
**path** | **String** | Restrict to a directory path.  Strongly recommended alongside text. | [optional] 
**size_max** | **Number** | Maximum size in bytes. | [optional] 
**size_min** | **Number** | Minimum size in bytes. | [optional] 
**sub_directories** | **Boolean** | Recurse below path.  Defaults to true. | [optional] 
**text** | **String** | Text to find inside files.  Only text/_* files are searched.  This is the expensive filter; narrow with path or file_name where possible. | [optional] 


