# UltraCartRestApiV2.ConversationWebsocketMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_uuid** | **String** | Conversation UUID if the websocket message is tied to a specific conversation | [optional] 
**event_conversation_closed** | [**ConversationSummary**](ConversationSummary.md) |  | [optional] 
**event_new_conversation** | [**ConversationSummary**](ConversationSummary.md) |  | [optional] 
**event_new_message** | [**ConversationSummary**](ConversationSummary.md) |  | [optional] 
**event_queue_position** | [**ConversationEventQueuePosition**](ConversationEventQueuePosition.md) |  | [optional] 
**event_queue_status_update** | [**ConversationWebchatQueueStatus**](ConversationWebchatQueueStatus.md) |  | [optional] 
**event_type** | **String** | Type of event | [optional] 
**event_updated_message** | [**ConversationMessage**](ConversationMessage.md) |  | [optional] 
**message** | [**ConversationMessage**](ConversationMessage.md) |  | [optional] 
**type** | **String** | Type of message | [optional] 


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `queue_position` (value: `"queue position"`)

* `webchat_start_conversation` (value: `"webchat start conversation"`)

* `conversation_closed` (value: `"conversation closed"`)

* `new_conversation` (value: `"new conversation"`)

* `new_message` (value: `"new message"`)

* `updated_message` (value: `"updated message"`)

* `queue_status_update` (value: `"queue status update"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `message` (value: `"message"`)

* `event` (value: `"event"`)

* `ping` (value: `"ping"`)




