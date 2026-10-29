# UltraCartRestApiV2.SfvbSequenceStepCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_uuid** | **String** | The new email&#39;s uuid.  Its body is the email container with this owner id. | [optional] 
**notes** | **[String]** | What to do next, such as writing the body, and customers already waiting on the step before it. | [optional] 
**requires_review** | **Boolean** | True when the new email must pass content review before it sends. | [optional] 
**step** | [**SfvbSequenceStep**](SfvbSequenceStep.md) |  | [optional] 


