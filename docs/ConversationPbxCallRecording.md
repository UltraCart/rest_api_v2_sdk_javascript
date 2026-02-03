# UltraCartRestApiV2.ConversationPbxCallRecording

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **Number** | Number of audio channels in the recording (1 for mono, 2 for stereo/dual-channel) | [optional] 
**duration_seconds** | **Number** | Duration of the recording in seconds | [optional] 
**is_primary** | **Boolean** | Whether this is the primary recording for the call | [optional] 
**recording_s3_key** | **String** | S3 key for the recording audio file | [optional] 
**recording_sid** | **String** | Twilio recording SID | [optional] 
**recording_url** | **String** | URL to access the recording | [optional] 
**status** | **String** | Status of the recording | [optional] 
**transcript** | [**ConversationPbxCallTranscript**](ConversationPbxCallTranscript.md) |  | [optional] 


