# UltraCartRestApiV2.ConversationWebchatQueueStatusAgent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_status** | **String** | Status of the agent | [optional] 
**agent_user_id** | **String** | Agent user id (populated by Java so the dispatch-scheduler Lambda can read it directly without parsing conversation_participant_arn) | [optional] 
**conversation_participant_arn** | **String** |  | [optional] 
**conversation_participant_name** | **String** |  | [optional] 
**custom_status_name** | **String** | Active custom status display name for this agent (denormalized) | [optional] 
**custom_status_uuid** | **String** | Active custom status uuid for this agent (null when on a system status) | [optional] 
**last_chat_dts** | **String** | Date/time that this agent took their last chat | [optional] 
**next_round_robin** | **Boolean** |  | [optional] 
**profile_image_url** | **String** | Profile image URL | [optional] 



## Enum: AgentStatusEnum


* `available` (value: `"available"`)

* `busy` (value: `"busy"`)

* `unavailable` (value: `"unavailable"`)




