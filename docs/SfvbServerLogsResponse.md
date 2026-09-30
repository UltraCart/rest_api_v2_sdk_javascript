# UltraCartRestApiV2.SfvbServerLogsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **Number** | The most logs returned. | [optional] 
**logs** | [**[SfvbServerLog]**](SfvbServerLog.md) | Matching logs, newest first, without their text. | [optional] 
**more_available** | **Boolean** | True when older logs in the window were not read.  Narrow since, or page by moving since back. | [optional] 
**searched** | **Number** | How many of the newest logs in the window were read to find these. | [optional] 
**since** | **String** | The start of the window searched, ISO-8601 in UTC.  Logs are kept for seven days. | [optional] 


