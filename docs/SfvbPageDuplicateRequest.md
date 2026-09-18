# UltraCartRestApiV2.SfvbPageDuplicateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **String** | Path of the copy, for example /lp/spring-sale-b/.  The same rules as creating a page - the parent must exist, the path must be new, and the last part may only contain letters, digits, hyphens and underscores. | [optional] 
**source_path** | **String** | Path of the page to copy.  Not the root, and not a page with pages under it. | [optional] 
**title** | **String** | Title of the copy.  Defaults to the source page&#39;s title. | [optional] 


