# UltraCartRestApiV2.ConversationPbxCallAgent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_extension** | **String** | Agent&#39;s phone extension | [optional] 
**agent_id** | **String** | Unique identifier for the agent | [optional] 
**agent_name** | **String** | Display name of the agent | [optional] 
**agent_user_id** | **String** | UltraCart user id for the agent (denormalized at index time so reporting endpoints can join on agent_user_id without translating from the agent_id login). | [optional] 
**answered** | **Boolean** | Whether the agent answered the call | [optional] 
**call_sid** | **String** | Twilio call SID for the agent&#39;s call leg | [optional] 
**joined_at_dts** | **String** | Timestamp when the agent joined the call | [optional] 
**left_at_dts** | **String** | Timestamp when the agent left the call | [optional] 
**role** | **String** | Role of the agent in the call | [optional] 
**worker_sid** | **String** | Twilio TaskRouter worker SID | [optional] 


