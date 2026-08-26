# UltraCartRestApiV2.SfvbVersionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerManagerVersion** | **String** | Container manager version used to compile for this merchant. | [optional] 
**containerVersionsRetained** | **Number** | Versions kept per non-file container before the oldest are pruned.  Beyond this, history is gone - not merely paginated. | [optional] 
**elementCount** | **Number** | Number of element types this version recognizes. | [optional] 
**maxCjsonBytes** | **Number** | Largest CJSON document that will be parsed, in bytes. | [optional] 
**maxPreviewSessionBytes** | **Number** | Largest payload one preview session may hold, in bytes. | [optional] 
**maxSearchResults** | **Number** | Hard ceiling on file search results per page. | [optional] 
**maxTemplateBytes** | **Number** | Largest template file that can be written, in bytes. | [optional] 
**maxWidgetIdsPerRequest** | **Number** | Most widget ids that can be reserved in one call. | [optional] 
**previewSessionTtlSeconds** | **Number** | Seconds a preview session survives before expiring. | [optional] 
**release** | **String** | Release channel selected for this merchant. | [optional] 



## Enum: ReleaseEnum


* `ga` (value: `"ga"`)

* `beta` (value: `"beta"`)

* `alpha` (value: `"alpha"`)




