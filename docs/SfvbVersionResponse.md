# UltraCartRestApiV2.SfvbVersionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_manager_version** | **String** | Container manager version used to compile for this merchant. | [optional] 
**container_versions_retained** | **Number** | Versions kept per non-file container before the oldest are pruned.  Beyond this, history is gone - not merely paginated. | [optional] 
**element_count** | **Number** | Number of element types this version recognizes. | [optional] 
**max_asset_bytes** | **Number** | Largest binary asset that can be uploaded, in bytes, for every accepted type except video. | [optional] 
**max_cjson_bytes** | **Number** | Largest CJSON document that will be parsed, in bytes. | [optional] 
**max_directory_entries** | **Number** | Most entries one directory listing returns.  Asking for more is silently reduced to this rather than refused, so compare against it instead of trusting that you got what you asked for.  The listing does set a truncated flag when it drops entries. | [optional] 
**max_library_results_per_page** | **Number** | Most element library results one page returns.  Asking for more is silently reduced to this, and unlike the directory listing there is no truncation flag on the response, so this number is the only way to know a larger request was cut. | [optional] 
**max_preview_session_bytes** | **Number** | Largest payload one preview session may hold, in bytes. | [optional] 
**max_revertable_bytes** | **Number** | Largest historical version files/revert will restore, in bytes.  Higher than max_text_read_bytes deliberately - putting back a version that is already stored is cheaper than serving it as JSON, so a version too large to read can still be reverted to. | [optional] 
**max_search_results** | **Number** | Hard ceiling on file search results per page. | [optional] 
**max_template_bytes** | **Number** | Largest .vm template that can be written, in bytes.  Narrow on purpose - it gates writes, only for files ending in .vm, and it is not the ceiling on reading a file back.  Use max_text_read_bytes for that. | [optional] 
**max_text_read_bytes** | **Number** | Largest file files/content will return as text, in bytes.  A file above this is refused with sfvb.too_large however small its history versions are.  Bigger than max_template_bytes, so a file can be readable here and still be too large to write back as a template.  Anything above this is still readable in full through files/download, which returns raw bytes and applies no ceiling. | [optional] 
**max_video_bytes** | **Number** | Largest video that can be uploaded, in bytes.  Video is the one type allowed past max_asset_bytes. | [optional] 
**max_widget_ids_per_request** | **Number** | Most widget ids that can be reserved in one call. | [optional] 
**preview_session_ttl_seconds** | **Number** | Seconds a preview session survives before expiring. | [optional] 
**release** | **String** | Release channel selected for this merchant. | [optional] 



## Enum: ReleaseEnum


* `ga` (value: `"ga"`)

* `beta` (value: `"beta"`)

* `alpha` (value: `"alpha"`)




