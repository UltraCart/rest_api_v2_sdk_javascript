# UltraCartRestApiV2.SfvbStepDispatchLogsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**SfvbStepCounts**](SfvbStepCounts.md) |  | [optional] 
**entries** | [**[SfvbStepDispatchLog]**](SfvbStepDispatchLog.md) | The entries in the window, newest first. | [optional] 
**next_offset** | **Number** | Send this as offset for the next page.  Absent on the last page. | [optional] 
**notes** | **[String]** | What a person should know about reading these entries. | [optional] 
**sequence_uuid** | **String** | The communication sequence the step is in. | [optional] 
**since** | **String** | The start of the window read, as ISO 8601. | [optional] 
**step_type** | **String** | The step&#39;s type, such as email, sms or wait. | [optional] 
**step_uuid** | **String** | The step. | [optional] 


