# UltraCartRestApiV2.ConversationAgentStatusHistorySearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_user_id** | **String** | Optional agent_user_id filter | [optional] 
**channel** | **String** | Optional channel filter | [optional] 
**date_end** | **String** | Date range end (ISO 8601 or YYYY-MM-DD) | [optional] 
**date_start** | **String** | Date range start (ISO 8601 or YYYY-MM-DD) | [optional] 
**status** | **String** | Optional new_status filter | [optional] 
**trigger** | **String** | Optional trigger filter | [optional] 



## Enum: ChannelEnum


* `pbx` (value: `"pbx"`)

* `chat` (value: `"chat"`)





## Enum: TriggerEnum


* `manual` (value: `"manual"`)

* `system` (value: `"system"`)

* `auto_disconnect` (value: `"auto_disconnect"`)




