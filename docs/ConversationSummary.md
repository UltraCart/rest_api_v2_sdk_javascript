# UltraCartRestApiV2.ConversationSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed** | **Boolean** |  | [optional] 
**conversation_arn** | **String** |  | [optional] 
**conversation_uuid** | **String** |  | [optional] 
**last_conversation_message_body** | **String** |  | [optional] 
**last_conversation_participant_arn** | **String** |  | [optional] 
**last_conversation_participant_name** | **String** |  | [optional] 
**last_interactive_message_dts** | **String** | Last interactive message date/time | [optional] 
**last_message_dts** | **String** | Last message date/time | [optional] 
**medium** | **String** | The communication medium of the customer. | [optional] 
**merchant_id** | **String** |  | [optional] 
**message_count** | **Number** |  | [optional] 
**participants** | [**[ConversationParticipant]**](ConversationParticipant.md) |  | [optional] 
**start_dts** | **String** | Start of the conversation date/time | [optional] 
**unread_messages** | **Boolean** |  | [optional] 
**visible** | **Boolean** |  | [optional] 


<a name="MediumEnum"></a>
## Enum: MediumEnum


* `sms` (value: `"sms"`)

* `websocket` (value: `"websocket"`)




