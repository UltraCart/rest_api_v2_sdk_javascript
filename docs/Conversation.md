# UltraCartRestApiV2.Conversation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_language_iso_code** | **String** | The base language iso code for the StoreFront that everything is translated into | [optional] 
**closed** | **Boolean** |  | [optional] 
**conversation_arn** | **String** |  | [optional] 
**conversation_uuid** | **String** |  | [optional] 
**customer_first_message_unresponded_to_dts** | **String** | Date/time of the first customer message that is unresponded to. | [optional] 
**last_conversation_message_body** | **String** |  | [optional] 
**last_conversation_participant_arn** | **String** |  | [optional] 
**last_conversation_participant_name** | **String** |  | [optional] 
**last_interactive_message_dts** | **String** | Last interactive message date/time | [optional] 
**last_message_dts** | **String** | Last message date/time | [optional] 
**medium** | **String** | The communication medium of the customer. | [optional] 
**merchant_id** | **String** |  | [optional] 
**message_count** | **Number** |  | [optional] 
**messages** | [**[ConversationMessage]**](ConversationMessage.md) |  | [optional] 
**participants** | [**[ConversationParticipant]**](ConversationParticipant.md) |  | [optional] 
**sentiment** | [**ConversationSentiment**](ConversationSentiment.md) |  | [optional] 
**start_dts** | **String** | Start of the conversation date/time | [optional] 
**unread_messages** | **Boolean** |  | [optional] 
**virtual_agent** | **Boolean** | True if a virtual agent answered the conversation | [optional] 
**virtual_agent_cost** | **Number** | The cost of this conversation performed by the virtual agent | [optional] 
**visible** | **Boolean** |  | [optional] 


<a name="MediumEnum"></a>
## Enum: MediumEnum


* `sms` (value: `"sms"`)

* `websocket` (value: `"websocket"`)




