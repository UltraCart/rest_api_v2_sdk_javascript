# UltraCartRestApiV2.ConversationPbxCallTranscriptSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **String** | Agent ID if speaker is an agent | [optional] 
**channel** | **String** | Audio channel identifier (e.g. ch_0, ch_1) | [optional] 
**confidence** | **Number** | Transcription confidence score (0-1) | [optional] 
**end_time** | **Number** | End time in seconds from beginning of recording | [optional] 
**speaker** | **String** | Speaker role | [optional] 
**start_time** | **Number** | Start time in seconds from beginning of recording | [optional] 
**text** | **String** | Transcribed text for this segment | [optional] 



## Enum: SpeakerEnum


* `customer` (value: `"customer"`)

* `agent` (value: `"agent"`)




