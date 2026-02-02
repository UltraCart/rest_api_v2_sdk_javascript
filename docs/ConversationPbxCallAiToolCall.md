# UltraCartRestApiV2.ConversationPbxCallAiToolCall

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**called_at_dts** | **String** | Timestamp when the tool was called | [optional] 
**completed_at_dts** | **String** | Timestamp when the tool call completed | [optional] 
**duration_ms** | **Number** | Duration of the tool call in milliseconds | [optional] 
**error_message** | **String** | Error message if the tool call failed | [optional] 
**parameters** | **Object** | Parameters passed to the tool (structure varies by tool) | [optional] 
**result** | **Object** | Result returned by the tool (structure varies by tool) | [optional] 
**success** | **Boolean** | Whether the tool call succeeded | [optional] 
**tool_call_uuid** | **String** | Unique identifier for this tool call | [optional] 
**tool_name** | **String** | Name of the tool that was called | [optional] 


