# UltraCartRestApiV2.ConversationPbxQueue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**announce_queue_position** | **Boolean** | If true, the customer is told their queue position upon entering the queue | [optional] 
**conversation_pbx_queue_uuid** | **String** | Conversation Pbx Queue unique identifier | [optional] 
**conversation_voicemail_mailbox_uuid** | **String** | The voicemail mailbox associated with this queue | [optional] 
**hold_conversation_pbx_audio_uuid** | **String** | The audio to play while holding in a queue | [optional] 
**max_hold_seconds** | **Number** | The maximum number of seconds for a customer to hold in a queue | [optional] 
**members** | [**ConversationPbxQueueMembers**](ConversationPbxQueueMembers.md) |  | [optional] 
**merchant_id** | **String** | Merchant Id | [optional] 
**name** | **String** | Name of queue | [optional] 
**no_agent_available_play_audio_uuid** | **String** | When no agent is available after the max_hold_seconds, say this | [optional] 
**no_agent_available_say** | **String** | When no agent is available after the max_hold_seconds, say this | [optional] 
**no_agent_available_say_voice** | **String** | The type of voice used to say text when no agent is available | [optional] 
**play_audio_uuid** | **String** | Audio played when customer enters a queue | [optional] 
**record_call** | **Boolean** | If true, any calls in this queue are recorded | [optional] 
**say** | **String** | Say text when a customer enters queue | [optional] 
**say_voice** | **String** | The type of voice to use when say text is spoken | [optional] 
**twilio_taskrouter_workflow_sid** | **String** | Twilio taskrouter workflow sid | [optional] 
**twilio_workspace_queue_sid** | **String** | Twilio workspace queue sid | [optional] 
**voicemail** | **Boolean** | If true, this queue has a voicemail associated with it | [optional] 
**wait_critical_seconds** | **Number** | Wait time in seconds before critical | [optional] 
**wait_warning_seconds** | **Number** | Wait time in seconds before warning | [optional] 


