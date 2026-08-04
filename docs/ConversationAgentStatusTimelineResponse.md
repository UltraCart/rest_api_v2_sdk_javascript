# UltraCartRestApiV2.ConversationAgentStatusTimelineResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_events** | [**[ConversationAgentCallEvent]**](ConversationAgentCallEvent.md) | PBX call records for the agent on the requested day | [optional] 
**chat_events** | [**[ConversationAgentChatEvent]**](ConversationAgentChatEvent.md) | Chat conversations for the agent on the requested day | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**status_events** | [**[ConversationAgentStatusEvent]**](ConversationAgentStatusEvent.md) | Status transitions for the agent on the requested day | [optional] 
**success** | **Boolean** | Indicates if API call was successful | [optional] 
**summary** | [**TimelineSummary**](TimelineSummary.md) |  | [optional] 
**warning** | [**Warning**](Warning.md) |  | [optional] 


