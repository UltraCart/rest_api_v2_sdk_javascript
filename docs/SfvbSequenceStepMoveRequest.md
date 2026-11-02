# UltraCartRestApiV2.SfvbSequenceStepMoveRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after_step_uuid** | **String** | The step it moves after, in that step&#39;s list.  The begin step puts it first in the sequence.  Not an end, continue or merge step. | [optional] 
**anchor_hash_sha256** | **String** | The hash_sha256 of after_step_uuid, or of branch_step_uuid, from the last read.  Required; 412 when stale. | [optional] 
**branch_step_uuid** | **String** | A condition, split or inboxgeek step.  With side, the step moves to the start of that side. | [optional] 
**side** | **String** | With branch_step_uuid, the side&#39;s label from the sequence read.  yes or no for a condition, left or right for a split or inboxgeek step. | [optional] 


