# UltraCartRestApiV2.SfvbLibraryAiReview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**findings** | **Object** | What the reviewers found.  detail is the category followed by the quoted evidence. | [optional] 
**prompt_version** | **String** | Version of the review policy that produced this verdict. | [optional] 
**reviewed_dts** | **String** | When the review ran, ISO 8601. | [optional] 
**screenshot_sha256** | **String** | The screenshot the review looked at, or absent when there was none. | [optional] 
**summary** | **String** | One or two sentences explaining the verdict. | [optional] 
**verdict** | **String** | approve, block, human or error.  block refuses any publish.  human or error refuses a public publish and is recorded on a shared one. | [optional] 



## Enum: VerdictEnum


* `approve` (value: `"approve"`)

* `block` (value: `"block"`)

* `human` (value: `"human"`)

* `error` (value: `"error"`)




