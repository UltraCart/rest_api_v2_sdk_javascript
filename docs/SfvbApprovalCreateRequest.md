# UltraCartRestApiV2.SfvbApprovalCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | The gated action to approve. | [optional] 
**params** | [**SfvbApprovalParams**](SfvbApprovalParams.md) |  | [optional] 
**reason** | **String** | Why the agent wants to do this, in a sentence.  Shown to the person as unverified text, capped at 500 characters. | [optional] 



## Enum: ActionEnum


* `file.delete` (value: `"file.delete"`)

* `blog_post.delete` (value: `"blog_post.delete"`)




