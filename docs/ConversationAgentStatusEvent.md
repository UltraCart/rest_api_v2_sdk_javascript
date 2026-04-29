# UltraCartRestApiV2.ConversationAgentStatusEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_identifier** | **String** | Agent identifier â€” voice_identity for PBX (e.g. &#39;client:login&#39;), participant_arn for chat, synthetic &#39;ai:&lt;user_id&gt;&#39; for AI flag events. Stable across an agent&#39;s events; participates in DDB pk and GSI1 sk. | [optional] 
**agent_name** | **String** | Agent display name at the time of the event | [optional] 
**agent_type** | **String** | Agent type | [optional] 
**agent_user_id** | **String** | Agent user id (links across channels) | [optional] 
**channel** | **String** | Channel | [optional] 
**custom_status_name** | **String** | Custom status name (when applicable) | [optional] 
**custom_status_uuid** | **String** | Custom status uuid (when applicable) | [optional] 
**duration_in_previous_seconds** | **Number** | Time spent in the previous status, in seconds | [optional] 
**event_dts** | **String** | Event timestamp (ISO 8601) | [optional] 
**event_uuid** | **String** | Event UUID (natural key for ES + BQ) | [optional] 
**merchant_id** | **String** | Merchant Id | [optional] 
**new_routing_effect** | **String** | Canonical new routing semantic | [optional] 
**new_status** | **String** | Channel-native new status name | [optional] 
**parent_merchant_id** | **String** | Parent merchant id (denormalized for ES routing parity) | [optional] 
**previous_routing_effect** | **String** | Canonical previous routing semantic | [optional] 
**previous_status** | **String** | Channel-native previous status name | [optional] 
**trigger** | **String** | What triggered the transition | [optional] 



## Enum: AgentTypeEnum


* `human` (value: `"human"`)

* `ai` (value: `"ai"`)





## Enum: ChannelEnum


* `pbx` (value: `"pbx"`)

* `chat` (value: `"chat"`)





## Enum: NewRoutingEffectEnum


* `available` (value: `"available"`)

* `busy` (value: `"busy"`)

* `unavailable` (value: `"unavailable"`)





## Enum: PreviousRoutingEffectEnum


* `available` (value: `"available"`)

* `busy` (value: `"busy"`)

* `unavailable` (value: `"unavailable"`)





## Enum: TriggerEnum


* `manual` (value: `"manual"`)

* `system` (value: `"system"`)

* `auto_disconnect` (value: `"auto_disconnect"`)




