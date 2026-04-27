# UltraCartRestApiV2.ConversationPbxVoicemailMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_sid** | **String** | Call SID | [optional] 
**duration** | **Number** | Duration in seconds | [optional] 
**from** | **String** | From phone number in E.164 | [optional] 
**from_caller_id** | **String** | From caller id (if available) | [optional] 
**listened** | **Boolean** | True if the voicemail has been listened to in the user interface | [optional] 
**merchant_id** | **String** | Merchant ID | [optional] 
**recording_sid** | **String** | Recording SID | [optional] 
**recording_size_bytes** | **Number** | Recording size in bytes | [optional] 
**recording_status** | **String** | Recording Status | [optional] 
**recording_url** | **String** | Recording URL (expires in 4 hours) | [optional] 
**transcript_json** | **String** | JSON version of the transcript | [optional] 
**transcript_text** | **String** | Formatted text of the transcript | [optional] 
**voicemail_dts** | **String** | Voicemail date/time | [optional] 



## Enum: RecordingStatusEnum


* `completed` (value: `"completed"`)




