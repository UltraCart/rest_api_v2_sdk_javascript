# UltraCartRestApiV2.ConversationPbxCallAiEngagement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_name** | **String** | Display name of the AI agent | [optional] 
**agent_uuid** | **String** | UUID of the AI agent configuration used | [optional] 
**cost** | [**ConversationPbxCallAiCost**](ConversationPbxCallAiCost.md) |  | [optional] 
**ended_at_dts** | **String** | Timestamp when the AI engagement ended | [optional] 
**engagement_type** | **String** | Type of AI engagement | [optional] 
**session_uuid** | **String** | Unique identifier for this AI engagement session | [optional] 
**started_at_dts** | **String** | Timestamp when the AI engagement started | [optional] 
**status** | **String** | Status of the AI engagement | [optional] 
**tool_calls** | [**[ConversationPbxCallAiToolCall]**](ConversationPbxCallAiToolCall.md) | List of tool calls made by the AI agent during this engagement | [optional] 
**whispers** | [**[ConversationPbxCallAiWhisper]**](ConversationPbxCallAiWhisper.md) | List of coaching whispers sent during this engagement | [optional] 


<a name="EngagementTypeEnum"></a>
## Enum: EngagementTypeEnum


* `agent` (value: `"ai_agent"`)

* `coach` (value: `"ai_coach"`)




