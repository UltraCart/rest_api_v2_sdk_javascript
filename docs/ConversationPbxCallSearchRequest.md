# UltraCartRestApiV2.ConversationPbxCallSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_ids** | **[String]** | Filter by agent IDs | [optional] 
**customer_name** | **String** | Filter by customer name | [optional] 
**direction** | **String** | Filter by call direction (inbound/outbound) | [optional] 
**disposition** | **String** | Filter by call disposition | [optional] 
**end_date** | **String** | Filter calls created on or before this date (ISO 8601) | [optional] 
**has_ai_engagement** | **Boolean** | Filter to calls with AI agent engagement | [optional] 
**has_recording** | **Boolean** | Filter to calls that have a recording | [optional] 
**has_transcript** | **Boolean** | Filter to calls that have a transcript | [optional] 
**max_duration_seconds** | **Number** | Filter by maximum call duration in seconds | [optional] 
**min_duration_seconds** | **Number** | Filter by minimum call duration in seconds | [optional] 
**phone_number** | **String** | Filter by phone number (partial match supported) | [optional] 
**queue_uuids** | **[String]** | Filter by queue UUIDs | [optional] 
**search_term** | **String** | Free text search term - smart-routed based on content (phone, email, UUID, or general text) | [optional] 
**start_date** | **String** | Filter calls created on or after this date (ISO 8601) | [optional] 
**statuses** | **[String]** | Filter by call statuses | [optional] 
**transcript_search** | **String** | Search within transcript text | [optional] 


