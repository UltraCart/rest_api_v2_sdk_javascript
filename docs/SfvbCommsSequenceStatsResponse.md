# UltraCartRestApiV2.SfvbCommsSequenceStatsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**communication_sequence_uuid** | **String** | The sequence. | [optional] 
**days** | **Number** | The window, in days, for the step counts. | [optional] 
**notes** | **[String]** | What the windows are and what a missing count means. | [optional] 
**overall** | [**SfvbCommsStat**](SfvbCommsStat.md) |  | [optional] 
**steps** | [**[SfvbCommsStepStat]**](SfvbCommsStepStat.md) | Each email, SMS, postcard and branch step, in the stored order. | [optional] 


