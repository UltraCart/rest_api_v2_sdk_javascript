# UltraCartRestApiV2.SfvbVersionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_manager_version** | **String** | Container manager version used to compile for this merchant. | [optional] 
**container_versions_retained** | **Number** | Versions kept per non-file container before the oldest are pruned.  Beyond this, history is gone - not merely paginated. | [optional] 
**element_count** | **Number** | Number of element types this version recognizes. | [optional] 
**max_cjson_bytes** | **Number** | Largest CJSON document that will be parsed, in bytes. | [optional] 
**max_preview_session_bytes** | **Number** | Largest payload one preview session may hold, in bytes. | [optional] 
**max_search_results** | **Number** | Hard ceiling on file search results per page. | [optional] 
**max_template_bytes** | **Number** | Largest template file that can be written, in bytes. | [optional] 
**max_widget_ids_per_request** | **Number** | Most widget ids that can be reserved in one call. | [optional] 
**preview_session_ttl_seconds** | **Number** | Seconds a preview session survives before expiring. | [optional] 
**release** | **String** | Release channel selected for this merchant. | [optional] 



## Enum: ReleaseEnum


* `ga` (value: `"ga"`)

* `beta` (value: `"beta"`)

* `alpha` (value: `"alpha"`)




