# UltraCartRestApiV2.ConversationAgentStatusRollup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_name** | **String** | Agent display name | [optional] 
**agent_user_id** | **String** | Agent user id | [optional] 
**availability_pct** | **Object** |  | [optional] 
**available_seconds** | **Number** | Seconds spent Available (incl. Busy per OVERVIEW reporting convention) | [optional] 
**calls_taken** | **Number** | Calls handled by the agent on this day (PBX channel only) | [optional] 
**channel** | **String** | Channel | [optional] 
**chats_handled** | **Number** | Chats handled by the agent on this day (chat channel only) | [optional] 
**rollup_date** | **String** | Day this rollup covers (YYYY-MM-DD) | [optional] 
**status_breakdown** | **Object** | Per-status duration breakdown in seconds (status name -&gt; seconds) | [optional] 
**total_tracked_seconds** | **Number** | Total seconds tracked across all statuses for the day | [optional] 
**unavailable_seconds** | **Number** | Seconds spent Unavailable | [optional] 



## Enum: ChannelEnum


* `pbx` (value: `"pbx"`)

* `chat` (value: `"chat"`)




